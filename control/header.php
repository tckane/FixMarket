<?php


///////////////////////////////////////////////////////
///
/// Fixmarket v0.000005
///
/// This file: control/header.php
///
///		Contents: 		
///		File inclusion: control/controlbox.php // Vars, db connection, site settings
///		File inclusion: control/css.php // CSS for layout
///		All HTML from DTD to an open <DIV>
///		
///////////////////////////////////////////////////////



////////////////// HEADER
//
//

include("./control/controlbox.php");






echo "<!DOCTYPE html>
<html lang=\"en\">
<head>
";



	// IF DESKTOP

if (!$DEVICE)
{


include("$DOCROOT/control/css.php");

$siteLogo = $result['site_logo'];
$logoThing = "<a href=\"http://www.fixmarket.org\" style=\" transform: scale(1);\"><img style=\"float:left;\" src=\"./assets/images/actual/$siteLogo\" alt=\"$siteTitle\"/></a>";
		
}
else
{
	// IF MOBILE
echo "<meta name=\"viewport\" content=\"width=device-width; initial-scale=1; maximum-scale=1\">"; 	
	
include("$DOCROOT/control/mobile-css.php");

$siteLogo = $result['site_logo_mobile'];
$logoThing = "<a href=\"http://www.fixmarket.org\" style=\" transform: scale(1);\"><img style=\"float:left; text-align: left;\" src=\"./assets/images/actual/$siteLogo\" alt=\"$siteTitle\"/></a>";



if ($siteTheme == 1)
{
$themeLink = "<a href=\"./do/dotheme.php?seltheme=2\" class=\"mobmenulink\">Dark Mode</a>";
}
else
{
$themeLink = "<a href=\"./do/dotheme.php?seltheme=1\" class=\"mobmenulink\">Light Mode</a>";
}


$navMob = "<nav>

<a href=\"#\" id=\"menu-icon\"></a>

<ul>

<li><a href=\"/index.php\" class=\"mobmenulink\">Home</a></li>
<li><a href=\"/browse.php?=activity=jobs\" class=\"mobmenulink\">Find Jobs</a></li>
<li><a href=\"/browse.php?activity=fixers\" class=\"mobmenulink\">Find Fixers</a></li>

<li><a href=\"/myaccount.php?activity=profile\" class=\"mobmenulink\">My Profile</a></li>

<li><a href=\"/myaccount.php?activity=listings\" class=\"mobmenulink\">My Listings</a></li>

<li><a href=\"/myaccount.php?activity=media\" class=\"mobmenulink\">My Media</a></li>

<li><a href=\"/contactus.php\" class=\"mobmenulink\">Contact</a></li>

<li></li>

<li>$themeLink</li>


</ul>

</nav>";


}



if ($siteTheme == 2) $tinySkin = "oxide-dark";
else  $tinySkin = "oxide";




echo "<title>$siteTitle</title>";


/////////////////////////////////
//
//
// Bring in the JavaScript 
//
echo "<script src='/dist/jquery-3.4.1.js'></script>
<script src='/dist/tinymce.min.js'></script>
<script src='/dist/myHeadJS.js'></script>";
//
//
//
/////////////////////////////////

echo "</head><body>";


	////////////////// GOOGLE ADSENSE
	//
	//
	//echo "<script data-ad-client=\"ca-pub-7503458750058445\" async //src=\"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js\"></script>";
	//
	//
	////////////////// GOOGLE ADSENSE


if (isset($_GET["msg"])) $infoMsg = $_GET["msg"];



if (!$DEVICE)
{


echo "<div class=\"header\">$logoThing<div style=\"float:right; padding-top: 18px; padding-right: 8px;\">";


	if (!$UserloggedIn)
	{
	$navArray = [
	"n1" => "<a class=\"nav\" href=\"./index.php?ActiveNav=n1\">ADD JOB</a>",
	"n2" => "<a class=\"nav\" href=\"./index.php?ActiveNav=n2&amp;activity=market\">BROWSE LISTINGS</a>",
	"n3" => "<a class=\"nav\" href=\"./index.php?ActiveNav=n3\">FIND A FIXER</a>",
	"n4" => "<a class=\"nav\" href=\"./myaccount.php?ActiveNav=n4\">MY ACCOUNT</a>",
	"n5" => "<a class=\"nav\" href=\"./about.php?ActiveNav=n5\">ABOUT US</a>"];
	}
	else
	{
	$navArray = [
	"n1" => "<a class=\"nav\" href=\"./index.php?ActiveNav=n1\">ADD JOB</a>",
	"n2" => "<a class=\"nav\" href=\"./index.php?ActiveNav=n2&amp;activity=market\">BROWSE LISTINGS</a>",
	"n3" => "<a class=\"nav\" href=\"./index.php?ActiveNav=n3\">FIND A FIXER</a>",
	"n4" => "<a class=\"nav\" href=\"./myaccount.php?ActiveNav=n4\">MY ACCOUNT</a>",
	"n5" => "<a class=\"nav\" href=\"./about.php?ActiveNav=n5\">ABOUT US</a>",
	"n6" => "<a class=\"nav\" href=\"./do/dologout.php?ActiveNav=n6\">SIGN OUT</a>",
	];	
	}
	
	
if (isset($ActiveNav))
{
$linkActive = $navArray[$ActiveNav];
}
else
{
$linkActive = null;	
}
foreach($navArray as $result)
{

		echo " $result ";
	
}
echo "</div></div>";








///////////////////////////////////////////////////// START PAGE NOW




echo "<div class=\"layout\">";


}
else
{
echo "<div class=\"nav\">$navMob</div>";
}



//
//
////////////////// HEADER ENDS



////////////////// CHUNKS
//
//


function startsWith($haystack, $needle)
{
     $length = strlen($needle);
     return (substr($haystack, 0, $length) === $needle);
}

function endsWith($haystack, $needle)
{
    $length = strlen($needle);
    if ($length == 0) {
        return true;
    }

    return (substr($haystack, -$length) === $needle);
}


//
//
////////////////// CHUNKS ENDS
?>
