<?php


///////////////////////////////////////////////////////
///
/// Fixmarket v0.000005
///
/// This file: control/controlbox.php
///
///		Contents: 		
///		Debug Mode Toggle
///		Database Connection
///		Site Variables
///		Device Detection
///		
///////////////////////////////////////////////////////


include("./control/mydbcon.php");


////////////// DEBUG MODE TOGGLE
//
//

$fixDebug = 1;


if ($fixDebug)
{
ini_set('display_errors', 1);
error_reporting(E_ALL);


}











//
//
////////////// DEBUG MODE TOGGLE ENDS



////////////// GET VARS
//
//

	//////////// VARS PASSED LIKE DISEASES
	//
		if (isset($_GET["ActiveNav"]))
		{
		$ActiveNav = $_GET["ActiveNav"];
		}

	//
	//////////// VARS PASSED LIKE DISEASES ENDS



	//////////// VARS INTUITED FROM TEA LEAVES
	//

		$DOCROOT = getcwd();

	//
	//////////// VARS INTUITED FROM TEA LEAVES ENDS



	//////////// GET SITE THEME
	//
	//
		
		// We will later allow user to set theme from a menu
		// and store it by account or cookie, and delete this message.
		
		if (isset($_COOKIE["Theme"]))
		{
		$siteTheme = $_COOKIE["Theme"];
		}
		
		
		if (isset($siteTheme))
		{
		$siteTheme = $siteTheme;
		}
		else
		{
		$siteTheme = 1;
		}
	
		$sql = $dbfix->prepare("SELECT * FROM site_themes WHERE id=:id");
		$sql->bindParam(':id',$siteTheme);
		$sql->execute();
		$themeDetails = $sql->fetch(PDO::FETCH_ASSOC);
	
		
		
		
		
		$siteLink = $themeDetails['site_link_col'];
		$siteAlink = $themeDetails['site_alink_col'];
		$siteVlink = $themeDetails['site_vlink_col'];
		$siteHlink = $themeDetails['site_hlink_col'];
		$siteNavCol = $themeDetails['site_nav_col'];
		$siteBgCol = $themeDetails['site_bg_col'];
		$siteDivCol = $themeDetails['site_div_col'];
		$siteTextCol = $themeDetails['site_text_col'];
		$siteAccentCol = $themeDetails['site_accent_col'];
		$siteSidemenuCol = $themeDetails['site_sidemenu_col'];
		$siteSidelinkCol = $themeDetails['site_sidelink_col'];
		$siteListinglinkCol = $themeDetails['listing_link_col'];
		$siteGradientCol = $themeDetails['bottom_grad_col'];
		$siteTripleOne = $themeDetails['triple_one'];
		$siteTripleTwo = $themeDetails['triple_two'];
		$siteTripleThree = $themeDetails['triple_three'];
		$marketSellCol = $themeDetails['market_sell_col'];
		$marketBuyCol = $themeDetails['markey_buy_col'];	
	//
	//
	////////////








	//////////// VARS SUCKED FROM DATABASE
	//

		$sql = $dbfix->prepare("SELECT * FROM site_parameters WHERE id=1");
		$sql->execute();
		$result = $sql->fetch(PDO::FETCH_ASSOC);


	// SITE DATA SUCH AS META TAGS, THE PAGE TITLE, LOGO, ADMIN EMAIL ETC
	
		$siteTitle = $result['site_title'];
		$siteMeta = $result['site_meta'];
		$siteLogo = $result['site_logo'];
		$siteCounter = $result['site_counter'];
		$siteAdministrator = $result['site_administrator'];
		$siteEmail = $result['site_email'];
		
		
		
	// FRONT PAGE DESCRIPTION AND RELATED IMAGERY	
	
		$siteHeader = $result['site_header'];
		$siteDescriptionOne = $result['site_description_one'];
		$siteDescriptionTwo = $result['site_description_two'];
		$siteDescriptionThree = $result['site_description_three'];
		$siteDescriptionOnePhoto = $result['site_description_photo_one'];
		$siteDescriptionTwoPhoto = $result['site_description_photo_two'];
		$siteDescriptionThreePhoto = $result['site_description_photo_three'];
		
	//
	//////////// VARS SUCKED FROM DATABASE ENDS

//
//
////////////// GET VARS ENDS



////////////// DETECT DEVICE
//
//
$useragent = $_SERVER['HTTP_USER_AGENT']; 
$iPod = stripos($useragent, "iPod"); 
$iPad = stripos($useragent, "iPad"); 
$iPhone = stripos($useragent, "iPhone");
$Android = stripos($useragent, "Android"); 
$iOS = stripos($useragent, "iOS");
//
$DEVICE = ($iPod||$iPad||$iPhone||$Android||$iOS);




//
//
////////////// DETECT DEVICE ENDS



////////////// CHECK LOGGED IN
//
//

if (isset($_COOKIE["Login"]))
{

	$getqu = "SELECT * FROM user_accounts WHERE login_cookie = ?";

	$get = $dbfix->prepare($getqu);	
	$get->execute([$_COOKIE["Login"]]);
	
	$usrDetails = $get->fetch(PDO::FETCH_ASSOC);
	$dbCookie = $usrDetails["login_cookie"];
	$verifiedEmail = $usrDetails["account_activated"];
	$accEmail = $usrDetails["account_email"];
	$accCity = $usrDetails["acity"];	
	$accPostcode = $usrDetails["apostcode"];	
	$accPhone = $usrDetails["aphone_one"];
	
	$usrID = $usrDetails["id"];
	
	if ($_COOKIE["Login"] != "")
	{
	$brCookie = $_COOKIE["Login"];
	
	
	$stmt = $dbfix->prepare("UPDATE user_accounts set user_lastseen=now() WHERE id=:usrID");
	$stmt->execute([':usrID' => $usrID,]);
	
	}

	if ($dbCookie == $brCookie)
	{
	$UserloggedIn = 1;
	}
	else
	{
	$UserloggedIn = 0;	
	}
}
else
{
$UserloggedIn = 0;	
}
	

//
//
////////////// CHECK LOGGED IN ENDS





























if ($DEVICE)
{

$outGo = "http://google.co.uk";
header("Location: $outGo");
exit;
}







?>
