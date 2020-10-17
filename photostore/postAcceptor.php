<?php

// Note: $image is an Imagick object, not a filename! See example use below.
function autoRotateImage($image) {
    $orientation = $image->getImageOrientation();

    switch($orientation) {
        case imagick::ORIENTATION_BOTTOMRIGHT:
            $image->rotateimage("#000", 180); // rotate 180 degrees
        break;

        case imagick::ORIENTATION_RIGHTTOP:
            $image->rotateimage("#000", 90); // rotate 90 degrees CW
        break;

        case imagick::ORIENTATION_LEFTBOTTOM:
            $image->rotateimage("#000", -90); // rotate 90 degrees CCW
        break;
    }

    // Now that it's auto-rotated, make sure the EXIF data is correct in case the EXIF gets saved with the image!
    $image->setImageOrientation(imagick::ORIENTATION_TOPLEFT);
} 
























	if ($_COOKIE["Login"] != "")
	{
		
	include("../control/mydbcon.php");	
		
	$brCookie = $_COOKIE["Login"];
	
	$cooq = "SELECT * FROM user_accounts WHERE login_cookie = ?";

	$cooq = $dbfix->prepare($cooq);	
	$cooq->execute([$_COOKIE["Login"]]);
	
	$cooq = $cooq->fetch(PDO::FETCH_ASSOC);
	$usrID = $cooq["id"];
	$jobID = $cooq["last_job"];	
	$lastLoc = $cooq["last_location"];		
	
	if ($jobID == "") $jobID = 0;
	if ($lastLoc == "") $lastLoc = "null";	


 



 /***************************************************
   * Only these origins are allowed to upload images *
   ***************************************************/
  $accepted_origins = array("http://localhost", "http://192.168.1.1","https://fixmarket.org", "http://fixmarket.org","https://www.fixmarket.org", "http://www.fixmarket.org");

  /*********************************************
   * Change this line to set the upload folder *
   *********************************************/
  $imageFolder = "";
  

  reset ($_FILES);
  $temp = current($_FILES);
  if (is_uploaded_file($temp['tmp_name'])){
    if (isset($_SERVER['HTTP_ORIGIN'])) {
      // same-origin requests won't set an origin. If the origin is set, it must be valid.
      if (in_array($_SERVER['HTTP_ORIGIN'], $accepted_origins)) {
        header('Access-Control-Allow-Origin: ' . $_SERVER['HTTP_ORIGIN']);
      } else {
        header("HTTP/1.1 403 Origin Denied");
        return;
      }
    }

    /*
      If your script needs to receive cookies, set images_upload_credentials : true in
      the configuration and enable the following two headers.
    */
    // header('Access-Control-Allow-Credentials: true');
    // header('P3P: CP="There is no P3P policy."');

    // Sanitize input
    if (preg_match("/([^\w\s\d\-_~,;:\[\]\(\).])|([\.]{2,})/", $temp['name'])) {
        header("HTTP/1.1 400 Invalid file name.");
        return;
    }

    // Verify extension
    if (!in_array(strtolower(pathinfo($temp['name'], PATHINFO_EXTENSION)), array("gif", "jpg", "png"))) {
        header("HTTP/1.1 400 Invalid extension.");
        return;
    }
	
	$countImages = "SELECT count(*) FROM user_gallery WHERE owner_id=:usrID AND job_id=:jobID";

	$countImages = $dbfix->prepare($countImages);	
	$countImages->execute([':usrID' => $usrID,':jobID' => $jobID]);
	$countImages = $countImages->fetch(PDO::FETCH_COLUMN);
	
	if ($countImages > 9) {
    header("HTTP/1.1 413 Payload Too Large.");
    return;
    }
	else
	{
		
		
	$temp["name"] = str_replace(" ","",$usrID.$jobID.md5($temp["name"]).$temp["name"]);
	
    // Accept upload if there was no origin, or if it is an accepted origin
    $filetowrite = $imageFolder . $temp['name'];
	
	if (!file_exists($temp["name"]))
	{
    move_uploaded_file($temp['tmp_name'], $filetowrite);
	}
	
    // Respond to the successful upload with JSON.
    // Use a location key to specify the path to the saved image resource.
    // { location : '/your/uploaded/image/file'}

	
    echo json_encode(array('location' => $filetowrite));
	

	
	
	$filetowrite = new Imagick($filetowrite);
	
	@autoRotateImage($filetowrite);

	$filetowrite->writeImage($temp["name"]); 

	
	if ($lastLoc == "ads")
	{
	$statement = $dbfix->prepare('INSERT INTO user_gallery (owner_id, ad_id, file) VALUES (?, ?, ?)');		
	}
	else
	{
	$statement = $dbfix->prepare('INSERT INTO user_gallery (owner_id, job_id, file) VALUES (?, ?, ?)');		
	}		
	$statement->execute([$usrID, $jobID, $temp["name"]]);
	
	
	}
	
	
	
	
  } else {
    // Notify editor that the upload failed
    header("HTTP/1.1 500 Server Error");
  }
  
	}
 ?>