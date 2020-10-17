<?php


///////////////////////////////////////////////////////
///
/// Fixmarket v0.000005
///
/// Header file: control/header.php
///
///		Contents: 		
///		File inclusion: control/controlbox.php // Vars, db connection, site settings
///		File inclusion: control/css.php // CSS for layout
///		All HTML from DTD to an open <DIV>
///		
/// Footer file: control/footer.php
///
///		Contents: 		
///		File inclusion: control/controlbox.php // Vars, db connection, site settings
///		HTML from closing </DIV> to closing </html>
///
///////////////////////////////////////////////////////



////////////////// GET HEADER
//
//
include("./control/header.php");
//
//
////////////////// GET HEADER ENDS



////////////////// BODY
//
//


$siteDescriptionOneCooked = nl2br("$siteDescriptionOne");
$siteDescriptionTwoCooked = nl2br("$siteDescriptionTwo");


//echo "<h1 style=\"padding: 10px;\">$siteHeader</h1>

//<div class=\"clearfix\">

//<img style=\"padding: 4px; border-radius: 8px; float:left; height: auto; width: 20%;\" src=\"./assets/images/actual/$siteDescriptionOnePhoto\"/>
//$siteDescriptionOneCooked

//</div>
//<div class=\"clearfix\">

//<img style=\"padding: 4px; border-radius: 8px; float:right; height: auto; width: 20%;\" src=\"./assets/images/actual/$siteDescriptionTwoPhoto\"/>
//$siteDescriptionTwoCooked
//</div>";


//
//
////////////////// BODY ENDS



////////////////// GET FOOTER
//
//

include("$DOCROOT/control/footer.php");

//
//
////////////////// GET FOOTER ENDS


?>