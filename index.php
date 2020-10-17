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





if ($activity == "")
{

////////////////// BODY
//
//
echo "
<div style=\"text-align: center;\"><img style=\"text-allign: center;\" src=\"./assets/images/actual/underconstruction.png\" alt=\"under construction\"/><br/><br/><br/>We're not open yet. Dont touch anything.</div>";
//
//
////////////////// BODY ENDS



////////////////// GET FOOTER
//
//



//
//
////////////////// GET FOOTER ENDS

}

if ($activity == "market")
{



	
include("$DOCROOT/account/showlistings.php");




}






include("$DOCROOT/control/footer.php");




?>
