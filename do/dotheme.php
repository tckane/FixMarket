<?php


include("../control/mydbcon.php");

if (isset($_GET["seltheme"]))
{
$selectedTheme = $_GET["seltheme"];
}
else
{
$selectedTheme = 1;
}


setcookie("Theme", "$selectedTheme", time() + 31536000, "/", "www.fixmarket.org", "secure", 1);


	$sql = $dbfix->prepare("SELECT * FROM site_themes WHERE id=:id");
	$sql->bindParam(':id',$selectedTheme);
	$sql->execute();
	$themeDetails = $sql->fetch(PDO::FETCH_ASSOC);
	
	$themeName = $themeDetails['Name'];



$outMsg = urlencode("Theme changed to $themeName");
$outGo = "/index.php?msg=$outMsg";
header("Location: $outGo");
exit;


//
//
////////////////// CHECK INPUT ENDS





?>