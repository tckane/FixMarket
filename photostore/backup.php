<?php




if (isset($_GET["imgFile"])) 
{
$fileContent = $_GET["imgFile"];
}
else $fileContent = "windows.png";

if (isset($_GET["imgSize"])) 
{
$imgSize = $_GET["imgSize"];
}
else $imgSize = "100";


ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);



$fileType = pathinfo($fileContent, PATHINFO_EXTENSION);



   header("Content-type: $fileType"); 

    // get originalsize of image 
	if ($fileType == "gif")
	{ $im = imagecreatefromgif("$fileContent"); }
	elseif ($fileType == "jpg")
	{ $im = imagecreatefromjpeg("$fileContent"); }
	elseif ($fileType == "jpeg")
	{ $im = imagecreatefromjpeg("$fileContent"); }
	elseif ($fileType == "png")
	{ $im = imagecreatefrompng("$fileContent"); }
	elseif ($fileType == "png")
	{ $errImg = "true"; }
	
	
    $width  = imagesx($im); 
    $height = imagesy($im); 
	
	
	
	

	if ($width > 500 || $height > 500)
	{
		$width = ($width / 3);
		$height = ($height / 3);
	}
	elseif ($width > 1000 || $height > 1000)
	{
		$width = ($width / 4);
		$height = ($height / 4);
	}
	elseif ($width > 2000 || $height > 2000)
	{
		$width = ($width / 5);
		$height = ($height / 5);
	}
	else
	{
	$width  = imagesx($im); 
    $height = imagesy($im); 
	}


    // Set thumbnail-width to 100 pixel 
    $imgw = $width; 

    // calculate thumbnail-height from given width to maintain aspect ratio 
    $imgh = $height / $width * $imgw; 
    // create new image using thumbnail-size 
    $thumb=ImageCreateTrueColor($imgw,$imgh); 
	
	imagealphablending($thumb,false);
	imagesavealpha($thumb,true);

    // copy original image to thumbnail 
    imagecopyresampled($thumb,$im,0,0,0,0,$imgw,$imgh,ImageSX($im),ImageSY($im)); 

    // show thumbnail on screen 
	
	
    $out = imagepng($thumb, null, 9); 
	
	
    print($out); 
    
    // clean memory 
    imagedestroy ($im); 
    imagedestroy ($thumb); 



?>