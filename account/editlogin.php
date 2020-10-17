<?php



///////////////////////////////////////////////////////
///
/// PROFILE PAGE
///
///////////////////////////////////////////////////////






if (isset($_GET["stateLogins"])) 
{
$stateLogins = $_GET["stateLogins"];
}
elseif (isset($_POST["stateLogins"])) 
{
$stateLogins = $_POST["stateLogins"];
}
else
{
$stateLogins = 1;
}


if ($stateLogins == 1)
{


if ($UserloggedIn)
{
		
	$accEmail = $usrDetails["account_email"];

	echo "<div class=\"myaaccountlanding\"><span style=\"font-weight: bold; font-size: 26px;\">Edit Login Details</span><br/><br/>";


echo "Current Email Address:<br/>$accEmail <a href=\"/myaccount.php?activity=logins&amp;stateLogins=changemail\">Change this</a><br/>
Note: You will be emailed a new activation link.<br/><br/>
Current Password:<br/>&lt;Encrypted&gt; <a href=\"/myaccount.php?activity=logins&amp;stateLogins=changepass\">Change this</a><br/>
Note: You will be emailed a new activation link.<br/></div>";

}
else
	
{

	// new user shouldn't be here but we'll do something with this space in the future. it's on the laterbase for now :P

}
}


///////////////////////////////////////////////////


if ($stateLogins == "changemail")
{


echo "Change Email address:<br/><br/>";




echo "<div class=\"form-style-2\">
	<form action=\"/account/editlogin.php\" method=\"post\"><span class=\"required\">*</span> Indicates a required field.<br/>


	<br/><label for=\"accEmail\">Email Address <span class=\"required\">*</span>
	<br/>
	<input type=\"text\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$\" title=\"An email address is expected.\" class=\"input-field\" style=\"width: 60%;\" name=\"accEmail\" value=\"$accEmail\" id=\"accEmail\"/>
	</label>

	<label for=\"stateLogins\"><input name=\"stateLogins\" type=\"hidden\" id=\"stateLogins\" value=\"submitEmail\"/></label>

	<label><input type=\"submit\" value=\"Update Email Address\" style=\"width: 60%;\" /></label>
	</form></div>";


}


if ($stateLogins == "submitEmail")
{
	
	
	
	
ini_set('display_errors', 1);
error_reporting(E_ALL);
	
include("../control/mydbcon.php");

include("../control/emailsettings.php");

if (isset($_POST["accEmail"])) 
{
$accEmail = strip_tags($_POST["accEmail"]);
}
else
{
$accEmail = "";
}

$qu = "SELECT count(*) FROM user_accounts WHERE account_email = :emailAddr";

$do = $dbfix->prepare($qu);	
$do->execute([':emailAddr' => $accEmail]);
$usrCount = $do->fetch(PDO::FETCH_COLUMN);
	
if ($usrCount != 1)
{

	if ($_COOKIE["Login"] != "")
	{
	$brCookie = $_COOKIE["Login"];
	}
	else
	{
	$brCookie = 0;
	}		
	
	$str = rand(1,99); 
	$randy = hash("sha256", $str); 
 
	
	
	
	include 'Mail.php';
	include 'Mail/mime.php';

	$httphost = $_SERVER["HTTP_HOST"];
	$activateLink = "https://$httphost/do/doactivate.php?token=$randy";

	$text = "Fixmarket.org - Email Address Changed<br/><br/>
	Please click on the link below to re-activate your account.<br/><br/>$activateLink";

	$html = "Fixmarket.org - Email Address Changed<br/><br/>
	Please click on the link below to re-activate your account.<br/><br/>$activateLink";



	//// email code block 1
	
	$crlf = "\n";
	$hdrs = array(
	'From' => 'no-reply@fixmarket.org',
	'Subject' => 'Fixmarket.org - Activate your account.',
	'Return-Path:' => 'Verify <no-reply@fixmarket.org>',
	'Organization:' => 'fixmarket.org',
	'MIME-Version:' => '1.0',
	'Content-type:' => 'text/plain; charset=iso-8859-1',
	'X-MSMail-Priority:' => 'Medium',
	'X-Mailer:' => 'PHP 7.3'
	);
	

	$true = true;

	$mime = new Mail_mime(array('eol' => $crlf));

	$mime->setTXTBody($text);
	$mime->setHTMLBody($html);

	$body = $mime->get();
	$hdrs = $mime->headers($hdrs);

	$mail = Mail::factory('smtp',
	  array ('host' => $SMTPhost,
		'port' => $SMTPport,
		'auth' => $true,
		'username' => $SMTPusername,
		'password' => $SMTPpassword));

	$sendResult = $mail->send($accEmail, $hdrs, $body);

	if (PEAR::isError($sendResult))
	{

		/// try google backup email			
		
		$crlf = "\n";
		$hdrs = array(
		'From' => 'no-reply@fixmarket.org',
		'Subject' => 'Fixmarket.org - Activate your account.',
		'Return-Path:' => 'Fixmarket Backup Email <no-reply@fixmarket.org>',
		'Organization:' => 'fixmarket.org',
		'MIME-Version:' => '1.0',
		'Content-type:' => 'text/plain; charset=iso-8859-1',
		'X-MSMail-Priority:' => 'Medium',
		'X-Mailer:' => 'PHP 7.3'
		);
		
		$true = true;

		$mime = new Mail_mime(array('eol' => $crlf));

		$mime->setTXTBody($text);
		$mime->setHTMLBody($html);

		$body = $mime->get();
		$hdrs = $mime->headers($hdrs);

		$mail = Mail::factory('smtp',
		array ('host' => $xSMTPhost,
		'port' => $xSMTPport,
		'auth' => $true,
		'username' => $xSMTPusername,
		'password' => $xSMTPpassword));

		$sendResult = $mail->send($accEmail, $hdrs, $body);

			if (PEAR::isError($sendResult))
			{

			$outMsg = urlencode("The mail server is currently experiencing issues. Please try again later.");
			$outGo = "/myaccount.php?msg=$outMsg";
			header("Location: $outGo");
			exit;	
			}
			else
			{
			/// SUCCESSFUL SEND 
			$sql = "UPDATE user_accounts SET
			account_email=:account_email, account_activated=:account_activated, account_activation_string=:account_activation_string WHERE login_cookie=:login_cookie";
			$stmt= $dbfix->prepare($sql);			
			$data = [
			':account_email' => $accEmail,
			':account_activated' => "0",
			':account_activation_string' => $randy,
			':login_cookie' => $brCookie
			];
			$stmt->execute($data);

			$outMsg = urlencode("Your email address was updated. Please click on the activation link in the email we sent you.");
			$outGo = "/myaccount.php?msg=$outMsg&activity=logins";
			header("Location: $outGo");
			exit;
			}			
	}
	else
	{
		
	/// SUCCESSFUL SEND 			
	
	$sql = "UPDATE user_accounts SET
	account_email=:account_email, account_activated=:account_activated, account_activation_string=:account_activation_string WHERE login_cookie=:login_cookie";
	$stmt= $dbfix->prepare($sql);			
	$data = [
	':account_email' => $accEmail,
	':account_activated' => "0",
	':account_activation_string' => $randy,
	':login_cookie' => $brCookie
	];
	$stmt->execute($data);

	$outMsg = urlencode("Your email address was updated. Please click on the activation link in the email we sent you.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=logins";
	header("Location: $outGo");
	exit;
	}
}
else
{
	$outMsg = urlencode("This email address is already associated with another account. Please try again.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=logins";
	header("Location: $outGo");
	exit;	
}
	
	
	
}




if ($stateLogins == "changepass")
{


echo "Change Password:<br/><br/>";




echo "<div class=\"form-style-2\">
	<form action=\"/account/editlogin.php\" method=\"post\"><span class=\"required\">*</span> Indicates a required field.<br/>

	
	<label for=\"newPass\">Password <span class=\"required\">*</span><br/><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" style=\"width: 60%;\" pattern=\"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" class=\"input-field\" name=\"newPass\" value=\"\" maxlength=\"255\" /></label>
	
	<label for=\"newPassAgain\">Repeat Password <span class=\"required\">*</span><br/><input type=\"password\" title=\"Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters\" style=\"width: 60%;\" pattern=\"(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}\" class=\"input-field\" name=\"newPassAgain\" value=\"\" maxlength=\"255\" /></label>
	
	

	<label for=\"stateLogins\"><input name=\"stateLogins\" type=\"hidden\" id=\"stateLogins\" value=\"submitPass\"/></label>

	<label><input type=\"submit\" value=\"Change Password\" style=\"width: 60%;\" /></label>
	</form></div>";


}







if ($stateLogins == "submitPass")
{
ini_set('display_errors', 1);
error_reporting(E_ALL);
	
include("../control/mydbcon.php");
include("../control/emailsettings.php");


if (isset($_POST["newPass"])) 
{
$newPass = strip_tags($_POST["newPass"]);
}
else
{
$newPass = "";
}

if (isset($_POST["newPassAgain"])) 
{
$newPassAgain = strip_tags($_POST["newPassAgain"]);
}
else
{
$newPassAgain = "";
}

	if ($newPass == "$newPassAgain" && $newPass != "" && $newPassAgain != "")
	{
	if ($_COOKIE["Login"] != "")
	{
	$brCookie = $_COOKIE["Login"];
	}
	else
	{
	$brCookie = 0;
	}	

	$getqu = "SELECT account_email FROM user_accounts WHERE login_cookie = ?";

	$get = $dbfix->prepare($getqu);	
	$get->execute([$_COOKIE["Login"]]);
	$usrDetails = $get->fetch(PDO::FETCH_ASSOC);
	$accEmail = $usrDetails["account_email"];
	
	
	$str = rand(1,99); 
	$randy = hash("sha256", $str); 
 
	
	
	
	include 'Mail.php';
	include 'Mail/mime.php';

	$httphost = $_SERVER["HTTP_HOST"];
	$activateLink = "https://$httphost/do/doactivate.php?token=$randy";

	$text = "Fixmarket.org - Password Changed<br/><br/>
	Please click on the link below to re-activate your account.<br/><br/>$activateLink";

	$html = "Fixmarket.org - Password Changed<br/><br/>
	Please click on the link below to re-activate your account.<br/><br/>$activateLink";



	//// email code block 1
	
	$crlf = "\n";
	$hdrs = array(
	'From' => 'no-reply@fixmarket.org',
	'Subject' => 'Fixmarket.org - Activate your account.',
	'Return-Path:' => 'Verify <no-reply@fixmarket.org>',
	'Organization:' => 'fixmarket.org',
	'MIME-Version:' => '1.0',
	'Content-type:' => 'text/plain; charset=iso-8859-1',
	'X-MSMail-Priority:' => 'Medium',
	'X-Mailer:' => 'PHP 7.3'
	);
	
	

	$true = true;

	$mime = new Mail_mime(array('eol' => $crlf));

	$mime->setTXTBody($text);
	$mime->setHTMLBody($html);

	$body = $mime->get();
	$hdrs = $mime->headers($hdrs);

	$mail = Mail::factory('smtp',
	  array ('host' => $SMTPhost,
		'port' => $SMTPport,
		'auth' => $true,
		'username' => $SMTPusername,
		'password' => $SMTPpassword));

	$sendResult = $mail->send($accEmail, $hdrs, $body);

	if (PEAR::isError($sendResult))
	{

		/// try google backup email			
		
		$crlf = "\n";
		$hdrs = array(
		'From' => 'no-reply@fixmarket.org',
		'Subject' => 'Fixmarket.org - Activate your account.',
		'Return-Path:' => 'Fixmarket Backup Email <no-reply@fixmarket.org>',
		'Organization:' => 'fixmarket.org',
		'MIME-Version:' => '1.0',
		'Content-type:' => 'text/plain; charset=iso-8859-1',
		'X-MSMail-Priority:' => 'Medium',
		'X-Mailer:' => 'PHP 7.3'
		);
		

		$true = true;

		$mime = new Mail_mime(array('eol' => $crlf));

		$mime->setTXTBody($text);
		$mime->setHTMLBody($html);

		$body = $mime->get();
		$hdrs = $mime->headers($hdrs);

		$mail = Mail::factory('smtp',
		array ('host' => $xSMTPhost,
		'port' => $xSMTPport,
		'auth' => $true,
		'username' => $xSMTPusername,
		'password' => $xSMTPpassword));

		$sendResult = $mail->send($accEmail, $hdrs, $body);

			if (PEAR::isError($sendResult))
			{

			$outMsg = urlencode("The mail server is currently experiencing issues. Please try again later.");
			$outGo = "/myaccount.php?msg=$outMsg";
			header("Location: $outGo");
			exit;	
			}
			else
			{
				
			$options = ['cost' => 13];
			$newEncPass = password_hash($newPass, PASSWORD_BCRYPT, $options);
					
				
			/// SUCCESSFUL SEND 
			$sql = "UPDATE user_accounts SET
			account_password=:newpass, account_activated=:account_activated, account_activation_string=:account_activation_string WHERE login_cookie=:login_cookie";
			$stmt= $dbfix->prepare($sql);			
			$data = [
			':newpass' => $$newEncPass,
			':account_activated' => "0",
			':account_activation_string' => $randy,
			':login_cookie' => $brCookie
			];
			$stmt->execute($data);	

			$outMsg = urlencode("Your password was changed. Please click on the activation link in the email we sent you.");
			$outGo = "/myaccount.php?msg=$outMsg&activity=logins";
			header("Location: $outGo");
			exit;
			}			
	}
	else
	{
			$options = ['cost' => 13];
			$newEncPass = password_hash($newPass, PASSWORD_BCRYPT, $options);
	/// SUCCESSFUL SEND 			
	
	$sql = "UPDATE user_accounts SET
	account_password=:newpass, account_activated=:account_activated, account_activation_string=:account_activation_string WHERE login_cookie=:login_cookie";
	$stmt= $dbfix->prepare($sql);			
	$data = [
	':newpass' => $newEncPass,
	':account_activated' => "0",
	':account_activation_string' => $randy,
	':login_cookie' => $brCookie
	];
	$stmt->execute($data);	

	$outMsg = urlencode("Your password was changed. Please click on the activation link in the email we sent you.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=logins";
	header("Location: $outGo");
	exit;
	}
	}
	else
	{
	$outMsg = urlencode("The passwords do not match. Please try again.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=logins";
	header("Location: $outGo");
	exit;	
	}
}




?>