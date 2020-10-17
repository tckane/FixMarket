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


if (isset($_GET["recoveryNew"])) 
{
$recoveryNew = $_GET["recoveryNew"];
}
else
{
$recoveryNew = 0;
}

if (isset($_GET["token"])) 
{
$tokenRec = $_GET["token"];
}
else
{
$tokenRec = "none";
}

ini_set('display_errors', 1);
error_reporting(E_ALL);


$qu = "SELECT count(*) FROM user_accounts WHERE recovery_string = :tokenRec";

$do = $dbfix->prepare($qu);	
$do->execute([':tokenRec' => $tokenRec]);
$userCount = $do->fetch(PDO::FETCH_COLUMN);


if ($tokenRec == "none" || $userCount == 0)
{
	
if ($userCount == 0 && $recoveryNew == "0")
{
$infoMsg = "The password recovery token has expired, please enter your email address to request a new one.</a>";
}
else
{
$infoMsg = "Enter the email address you signed up with to reset your password.</a>";	
}


	
if (isset($infoMsg)) echo "<div class=\"accent\" style=\"text-align: center;\">$infoMsg</div>";
	
echo "<div class=\"formalign\" style=\"width: 300px;\">
<div class=\"form-style-2\">
<div class=\"form-style-2-heading\"> Enter email address</div>

<form action=\"./do/dopasswordreset.php\" method=\"post\">
<label for=\"emailaddr\"><span>Email Address <span class=\"required\">*</span></span><input type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$\" class=\"input-field\" name=\"emailaddr\" value=\"\" maxlength=\"255\" /></label>

<label for=\"addressLineOne\"><input name=\"addressLineOne\" type=\"text\" id=\"addressLineOne\" class=\"hide-robot\"/></label>

<label><input type=\"submit\" value=\"Reset Password\" /></label>
</form>
</div></div>";
	
}
else
{
	
	$qu = "SELECT count(*) FROM user_accounts WHERE recovery_string = :tokenRec";

	$do = $dbfix->prepare($qu);	
	$do->execute([':tokenRec' => $tokenRec]);
	$userCount = $do->fetch(PDO::FETCH_COLUMN);
	
	
	if ($userCount == 1)
	{


	if (isset($_GET["msg"])) $infoMsg = $_GET["msg"]; 
	else $infoMsg = "Please enter a new password.";
		
		
	echo "<div class=\"accent\" style=\"text-align: center;\">$infoMsg</div>";
		
	echo "<div class=\"formalign\">
	<div class=\"form-style-2\">
	<div class=\"form-style-2-heading\"> Select a new password</div>

	<form action=\"./do/dopasswordreset.php\" method=\"post\">
	<label for=\"newPass\"><span>Password <span class=\"required\">*</span></span><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" pattern=\"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" class=\"input-field\" name=\"newPass\" value=\"\" maxlength=\"255\" /></label>
	
	<label for=\"newPassAgain\"><span>Repeat Password <span class=\"required\">*</span></span><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" pattern=\"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" class=\"input-field\" name=\"newPassAgain\" value=\"\" maxlength=\"255\" /></label>

	<label for=\"tokenRec\"><input name=\"tokenRec\" type=\"hidden\" id=\"tokenRec\" class=\"hide-robot\" value=\"$tokenRec\"/></label>

	<label for=\"addressLineOne\"><input name=\"addressLineOne\" type=\"text\" id=\"addressLineOne\" class=\"hide-robot\"/></label>

	<label><input type=\"submit\" value=\"Reset Password\" /></label>
	</form>
	</div></div>";
		
	}
}




	


////////////////// GET FOOTER
//
//

include("$DOCROOT/control/footer.php");

//
//
////////////////// GET FOOTER ENDS


?>