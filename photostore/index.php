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




function thumbnailImage($imagePath,$color,$quality)
{	

	$fileType = pathinfo($imagePath, PATHINFO_EXTENSION);

	if (!empty($fileType))
	{
		switch($fileType)
		{
			case "gif":
				$im = imagecreatefromgif($imagePath);
				break;
		
			case "jpg":
				$im = imagecreatefromjpeg($imagePath);
				break;
		
			case "jpeg":
				$im = imagecreatefromjpeg($imagePath);
				break;
		
			case "png":
				$im = imagecreatefrompng($imagePath);
				break;
		}
	}

	$imagick = new Imagick();
	$imagick->readImage($imagePath);
	$compression_type = Imagick::COMPRESSION_JPEG; 
    $imagick->setImageCompression($compression_type);
    $imagick->setImageCompressionQuality($quality);
	
	if ($fileType == "jpeg" || $fileType == "jpeg" )
	{
		$exif = exif_read_data($imagePath);
		if (!empty($exif['Orientation'])) {
			switch ($exif['Orientation']) {
				case 3:
					$imagick = imagerotate($imagick, 180, 0);
					break;

				case 6:
					$imagick = imagerotate($imagick, -90, 0);
					break;

				case 8:
					$imagick = imagerotate($imagick, 90, 0);
					break;
			}
		}
	}
    $imagick->setImageBackgroundColor($color);
    $imagick->thumbnailImage(150, 150, true, true);
    header("Content-type: image/jpg");
	header('Expires: Sun, 01 Jan 2014 00:00:00 GMT');
	header('Cache-Control: no-store, no-cache, must-revalidate');
	header('Cache-Control: post-check=0, pre-check=0', FALSE);
	header('Pragma: no-cache');
    echo $imagick->getImageBlob();
}

thumbnailImage($fileContent,'#ffffff',50);

?>