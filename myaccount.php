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


if (isset($_GET["jobSelect"])) 
{
$jobSelect = $_GET["jobSelect"];
}
elseif (isset($_POST["jobSelect"])) 
{
$jobSelect = $_POST["jobSelect"];
}
else
{
$jobSelect = 0;
}


if (isset($_GET["messageSelect"])) 
{
$messageSelect = $_GET["messageSelect"];
}
elseif (isset($_POST["messageSelect"])) 
{
$messageSelect = $_POST["messageSelect"];
}
else
{
$messageSelect = 0;
}

if (isset($_GET["activity"])) 
{
$activity = $_GET["activity"];
}
elseif (isset($_POST["activity"])) 
{
$activity = $_POST["activity"];
}
else
{
$activity = "";
}


////////////////// BODY
//
//


if (isset($infoMsg)) echo "<div class=\"accent\" style=\"text-align: center;\">$infoMsg</div>";


if ($UserloggedIn)
{


	$accountEmail = $usrDetails["account_email"];
	$gid = $usrDetails["id"];

	if ($verifiedEmail != 1)
	{
	$infoMsg = "Your account is not yet active, please click on the link sent to $accountEmail.<br/><a href=\"./do/doemailresend.php?gid=$gid\">Click here</a> to send it again</a>";
	
	if (isset($infoMsg)) echo "<div class=\"accent\" style=\"text-align: center;\">$infoMsg</div>";

	}
	else
	{
		
		
	$saluTation = $usrDetails["monicker"];
	

	if ($saluTation == "") $saluTation = strstr($accountEmail, '@', true);





	if (endsWith($saluTation, "s"))
	{
	$whosAcc = "$saluTation' account";
	}
	else
	{
	$whosAcc = "$saluTation's account";
	}
	
	if (!isset($actAppend)) $actAppend = "";
	
	if ($activity == "") $actAppend = "";
	if ($activity == "profile") $actAppend = " / Edit Profile";
	if ($activity == "logins") $actAppend = " / Login Details";
	if ($activity == "listings") $actAppend = " / My Listings";
	if ($activity == "myads") $actAppend = " / My Ads";
	if ($activity == "mail") $actAppend = " / Messages";


	if ($activity == "listings")
	{
	$jSel = "SELECT * FROM user_jobs WHERE id=:jobid";
	$jSel = $dbfix->prepare($jSel);
	$jSel->execute([':jobid' => $jobSelect]);
	$jMeat = $jSel->fetch(PDO::FETCH_ASSOC);
	$jobS = $jMeat["job_title"];

	if ($jobSelect > 0) $actAppend = "$actAppend / Editing Job #$jobSelect - $jobS";
	else $actAppend = "$actAppend";
	}
	
	if ($activity == "myads")
	{
	$jSel = "SELECT * FROM user_ads WHERE id=:jobid";
	$jSel = $dbfix->prepare($jSel);
	$jSel->execute([':jobid' => $jobSelect]);
	$jMeat = $jSel->fetch(PDO::FETCH_ASSOC);
	$jobS = $jMeat["job_title"];

	if ($jobSelect > 0) $actAppend = "$actAppend / Editing Ad #$jobSelect - $jobS";
	else $actAppend = "$actAppend";
	}	

	if ($activity == "mail")
	{
	$jSel = "SELECT * FROM user_messages WHERE id=:messageSelect";
	$jSel = $dbfix->prepare($jSel);
	$jSel->execute([':messageSelect' => $messageSelect]);
	$jMeat = $jSel->fetch(PDO::FETCH_ASSOC);
	$messageS = $jMeat["mail_subject"];
	
	$dbGetSubjectFromJob = "SELECT * FROM user_jobs WHERE id=:messageS";
	$dbGetSubjectFromJob = $dbfix->prepare($dbGetSubjectFromJob);
	$dbGetSubjectFromJob->execute([':messageS' => $messageS]);
	$jobMeat = $dbGetSubjectFromJob->fetch(PDO::FETCH_ASSOC);
	$messageS = $jobMeat["job_title"];
	
			if (strlen($messageS) > 30)
			{
				$messageS = substr("$messageS", 0, 30);
				$messageS = "$messageS...";
			}
			else
			{
			$messageS = $messageS;
			}	

	if ($messageSelect > 0) $actAppend = "$actAppend / Message: Re: $messageS";
	else $actAppend = "$actAppend";
	}	


		
	if (!isset($infoMsg)) echo "<div class=\"accent\">$whosAcc$actAppend.</div>";

	if (!$DEVICE)
	{

echo "<div class=\"sidemenu\">
<a class=\"sides\" href=\"./myaccount.php\">Account Home</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=profile\">Profile</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=mail\">Messages</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=listings\">My Fix Requests</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=myads\">My Fixer Ads</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=logins\">Login Details</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=rep\">My Reputation</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=privacy\">Privacy</a><br/>
<a class=\"sides\" href=\"./myaccount.php?activity=reviews\">Reviews</a><br/>
<a class=\"sides\" href=\"./forums/index.php?activity=profile\">Community</a>
<a class=\"sides\" href=\"./myaccount.php?activity=help\">Account Help</a>
</div>";
	}
		
		
		
	echo "<div class=\"mainwindow\">";












	// modules here
	
	if ($activity == "" || $activity == "default")
	{
	include("./account/myaccountlanding.php");
	}
	


	
	
	if ($activity == "profile")
	{
	include("./account/editprofile.php");
	}
	
	if ($activity == "logins")
	{
	include("./account/editlogin.php");
	

	}
	
	if ($activity == "listings")
	{	
	include("./account/mylistings.php");
	}
	
	if ($activity == "myads")
	{	
	include("./account/myads.php");
	}	
	
	if ($activity == "mail")
	{	
	include("./account/mymessages.php");
	}
	// MODULES END
		




	//include("$DOCROOT/control/rightside.php");
	//include("$DOCROOT/control/bottom.php");

	
	/////// THE BOX ON THE LEFT BELOW THE MENU
	

	



	}



}
else
	
{
		
	// Process as newstart
	//echo "user not logged in";
	
	
echo "<div class=\"formalign\" style=\"width: 300px;\">
<div class=\"form-style-2\">
<div class=\"form-style-2-heading\"> Enter login details</div>

<form action=\"./do/dologin.php\" method=\"post\">


<label for=\"emailaddr\">Email Address <span class=\"required\">*</span><br/><input type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$\" class=\"input-field\" name=\"emailaddr\" value=\"\" maxlength=\"255\" id=\"emailaddr\" /></label>
<br/>

<label for=\"userPass\">Password <span class=\"required\">*</span><br/><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" pattern=\"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" class=\"input-field\" name=\"userPass\" value=\"\" maxlength=\"255\" id=\"userPass\" /></label><br/>

<label for=\"addressLineOne\"><input name=\"addressLineOne\" type=\"text\" id=\"addressLineOne\" class=\"hide-robot\" /></label>

<label><input type=\"submit\" value=\"Login\" /></label>
</form>


<div style=\"text-align: center; font-weight: bold;\"><a style=\"text-align: center;\" href=\"./lostpassword.php?recoveryNew=1\">I've lost my password</a></div></div>

<div style=\"text-align: center; font-weight: bold;\"><br/>- OR -<br/></div>

<div class=\"formalign\" style=\"width: 300px;\">
<div class=\"form-style-2\">
<div class=\"form-style-2-heading\"><br/> Create New Account <br/></div>



<form action=\"./do/doregister.php\" method=\"post\">

<label for=\"emailaddr\">Email Address <span class=\"required\">*</span><br/><input type=\"email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$\" class=\"input-field\" name=\"emailaddr\" value=\"\" maxlength=\"255\" id=\"emailaddr\"/></label><br/>

<label for=\"userPass\">Password <span class=\"required\">*</span><br/><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" class=\"input-field\" name=\"userPass\" value=\"\" maxlength=\"255\" id=\"userPass\"/></label><br/>

<label for=\"userPassAgain\">Repeat Password <span class=\"required\">*</span><br/><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" pattern=\"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" class=\"input-field\" name=\"userPassAgain\" value=\"\" maxlength=\"255\" id=\"userPassAgain\"/></label><br/>

<label for=\"addressLineOne\"><input name=\"addressLineOne\" type=\"text\" id=\"addressLineOne\" class=\"hide-robot\"/></label>

<label><input type=\"submit\" value=\"Create Account\" /></label>
</form>
</div></div>";
	
	
	
}

//
//
////////////////// BODY ENDS


//////// RIGHT HAND SIDE PANEL


include("$DOCROOT/control/rightside.php");
//

////////////////// GET FOOTER
//
//

include("$DOCROOT/control/footer.php");

//
////////////////// GET FOOTER ENDS


?>
