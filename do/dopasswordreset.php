<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);
include("../control/mydbcon.php");


if (isset($_POST["emailaddr"])) 
{
$inputEmail = $_POST["emailaddr"];
}
else
{
$inputEmail = "none@none.com";
}


if (isset($_POST["newPass"])) 
{
$inputPass = strip_tags($_POST["newPass"]);
}

if (isset($_POST["newPassAgain"])) 
{
$inputPassAgain = strip_tags($_POST["newPassAgain"]);
}

if (isset($_POST["tokenRec"])) 
{
$tokenRec = $_POST["tokenRec"];
}
else
{
$tokenRec = "";
}
if (isset($_POST["addressLineOne"])) 
{
$addressLineOne = strip_tags($_POST["addressLineOne"]);
}
else
{
$addressLineOne = "";	
}

/////////////////////////////
//
//	email details


include("../control/emailsettings.php");


//
//
/////////////////////////////



if ($addressLineOne == "")
{
	
	
	


if ($tokenRec == "")
{
	$qu = "SELECT count(*) FROM user_accounts WHERE account_email = :emailaddr";

	$do = $dbfix->prepare($qu);	
	$do->execute([':emailaddr' => $inputEmail]);
	$userCount = $do->fetch(PDO::FETCH_COLUMN);

			
	if ($userCount == 1)
	{
		
	$options = ['cost' => 13];
	$recoveryString = password_hash($inputEmail, PASSWORD_BCRYPT, $options);
		
	$sql = "UPDATE user_accounts SET recovery_string=? WHERE account_email=?";
	$stmt= $dbfix->prepare($sql);
	$stmt->execute([$recoveryString, $inputEmail]);
		


	$httphost = $_SERVER["HTTP_HOST"];
	$activateLink = "https://$httphost/lostpassword.php?token=$recoveryString";

	$html = "Reset your fixmarket.org password.<br/><br/>
	Click on the link below to reset your password.<br/><br/>$activateLink<br/><br/>If you did not request a password reset, please ignore this email.";


	//// email code block 1

	include 'Mail/mime.php';
	include 'Mail.php';
	$crlf = "\n";
	$hdrs = array(
	'From' => 'no-reply@fixmarket.org',
	'Subject' => 'Fixmarket.org - Reset password.',
	'Return-Path:' => 'Password <no-reply@fixmarket.org>',
	'Organization:' => 'fixmarket.org',
	'MIME-Version:' => '1.0',
	'Content-type:' => 'text/plain; charset=iso-8859-1',
	'X-MSMail-Priority:' => 'Medium',
	'X-Mailer:' => 'PHP 7.3'
	);

	$true = true;

	$mime = new Mail_mime(array('eol' => $crlf));

	//$mime->setTXTBody($text);
	$mime->setHTMLBody($html);

	$body = $mime->get();
	$hdrs = $mime->headers($hdrs);
	$mail = Mail::factory('smtp',
	  array ('host' => $SMTPhost,
		'port' => $SMTPport,
		'auth' => $true,
		'username' => $SMTPusername,
		'password' => $SMTPpassword));

	$sendResult = $mail->send($inputEmail, $hdrs, $body);

		if (PEAR::isError($sendResult))
		{


		$html = "Reset your fixmarket.org password.<br/><br/>
		Click on the link below to reset your password.<br/><br/>$activateLink<br/><br/>If you did not request a password reset, please ignore this email.<br/><br/><br/><br/>* Our regular email server is currently overloaded so our system has automatically switched to Google backup.<br/><br/>To ensure this email has definitely come from us, you can check that the link above points to fixmarket.org and copy and paste it into your browser, rather than clicking on the link directly.";


			/// try google backup email			
			$crlf = "\n";
			$hdrs = array(
			'From' => 'no-reply@fixmarket.org',
			'Subject' => 'Fixmarket.org - Reset password.',
			'Return-Path:' => 'Password <no-reply@fixmarket.org>',
			'Organization:' => 'fixmarket.org',
			'MIME-Version:' => '1.0',
			'Content-type:' => 'text/plain; charset=iso-8859-1',
			'X-MSMail-Priority:' => 'Medium',
			'X-Mailer:' => 'PHP 7.3'
			);

			$true = true;

			$mime = new Mail_mime(array('eol' => $crlf));

			//$mime->setTXTBody($text);
			$mime->setHTMLBody($html);

			$body = $mime->get();
			$hdrs = $mime->headers($hdrs);

			$mail = Mail::factory('smtp',
			array ('host' => $xSMTPhost,
			'port' => $xSMTPport,
			'auth' => $true,
			'username' => $xSMTPusername,
			'password' => $xSMTPpassword));

			$sendResult = $mail->send($inputEmail, $hdrs, $body);

			if (PEAR::isError($sendResult))
			{

			$outMsg = urlencode("The mail server is currently experiencing issues. Please try again later.");
			$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
			header("Location: $outGo");
			echo "here";
			exit;	
			}
			else
			{
			/// SUCCESSFUL SEND 
			$outMsg = urlencode("An account recovery email has been sent to $inputEmail, please click on the link to reset your password.  If you cannot see the email, please check the spam folder.");
				
			$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
			header("Location: $outGo");
			exit;
			}			
		}
		else
		{
			
		/// SUCCESSFUL SEND 
		$outMsg = urlencode("An account recovery email has been sent to $inputEmail, please click on the link to reset your password.  If you cannot see the email, please check the spam folder.");

		$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
		header("Location: $outGo");
		}
	}
	else
	{
	$outMsg = urlencode("$inputEmail does not appear to have an associated account. Please check and try again.");

	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
	header("Location: $outGo");
	}
}

else
{
	
	$qu = "SELECT count(*) FROM user_accounts WHERE recovery_string = :tokenRec";

	$do = $dbfix->prepare($qu);	
	$do->execute([':tokenRec' => $tokenRec]);
	$userCount = $do->fetch(PDO::FETCH_COLUMN);
	
	if ($userCount == 1)
	{	
		if ($inputPass == "$inputPassAgain" && $inputPass != "" && $inputPassAgain != "")
		{
	
		$passQu = "SELECT account_email FROM user_accounts WHERE recovery_string = :tokenRec";
		$passGrab = $dbfix->prepare($passQu);	
		$passGrab->execute([':tokenRec' => $tokenRec]);
		$passGrab = $passGrab->fetch(PDO::FETCH_ASSOC);
		$inputEmail = $passGrab["account_email"];
		
		$html = "fixmarket.org password reset.<br/><br/>
		Your password has been reset.
		<br/>Please use your new password from now on.";

		//// email code block 1
			include 'Mail/mime.php';
			include 'Mail.php';
			$crlf = "\n";
			$hdrs = array(
			'From' => 'no-reply@fixmarket.org',
			'Subject' => 'Fixmarket.org - Reset password.',
			'Return-Path:' => 'Password <no-reply@fixmarket.org>',
			'Organization:' => 'fixmarket.org',
			'MIME-Version:' => '1.0',
			'Content-type:' => 'text/plain; charset=iso-8859-1',
			'X-MSMail-Priority:' => 'Medium',
			'X-Mailer:' => 'PHP 7.3'
			);

			$true = true;

			$mime = new Mail_mime(array('eol' => $crlf));

			//$mime->setTXTBody($text);
			$mime->setHTMLBody($html);

			$body = $mime->get();
			$hdrs = $mime->headers($hdrs);

		$mail = Mail::factory('smtp',
		  array ('host' => $SMTPhost,
			'port' => $SMTPport,
			'auth' => $true,
			'username' => $SMTPusername,
			'password' => $SMTPpassword));

		$sendResult = $mail->send($inputEmail, $hdrs, $body);

			if (PEAR::isError($sendResult))
			{


			$html = "fixmarket.org password reset.<br/><br/>
			Your password has been reset.<br/>
			<br/>Please use your new password from now on.<br/><br/><br/><br/>* Our regular email server is currently overloaded so our system has automatically switched to Google backup.<br/><br/>To ensure this email has definitely come from us, you can check that the link above points to fixmarket.org and copy and paste it into your browser, rather than clicking on the link directly.";


				/// try google backup email			
				$crlf = "\n";
				$hdrs = array(
				'From' => 'no-reply@fixmarket.org',
				'Subject' => 'Fixmarket.org - Reset password.',
				'Return-Path:' => 'Password <no-reply@fixmarket.org>',
				'Organization:' => 'fixmarket.org',
				'MIME-Version:' => '1.0',
				'Content-type:' => 'text/plain; charset=iso-8859-1',
				'X-MSMail-Priority:' => 'Medium',
				'X-Mailer:' => 'PHP 7.3'
				);

				$true = true;

				$mime = new Mail_mime(array('eol' => $crlf));

				//$mime->setTXTBody($text);
				$mime->setHTMLBody($html);

				$body = $mime->get();
				$hdrs = $mime->headers($hdrs);


				$mail = Mail::factory('smtp',
				array ('host' => $xSMTPhost,
				'port' => $xSMTPport,
				'auth' => $true,
				'username' => $xSMTPusername,
				'password' => $xSMTPpassword));

				$sendResult = $mail->send($inputEmail, $hdrs, $body);

				if (PEAR::isError($sendResult))
				{

				$outMsg = urlencode("The mail server is currently experiencing issues. Please try again later.");
				$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
				header("Location: $outGo");
				exit;	
				}
				else
				{
				/// SUCCESSFUL SEND 
				$outMsg = urlencode("Your password has been reset.");
					
				$options = ['cost' => 13];
				$inputPass = password_hash($inputPass, PASSWORD_BCRYPT, $options);
				
				$sql = "UPDATE user_accounts SET account_password=? WHERE recovery_string=?";
				$stmt= $dbfix->prepare($sql);
				$stmt->execute([$inputPass,$tokenRec]);
				
				$sql = "UPDATE user_accounts SET recovery_string=? WHERE recovery_string=?";
				$stmt= $dbfix->prepare($sql);
				$stmt->execute([0,$tokenRec]);
					
					
				$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
				header("Location: $outGo");
				exit;
				}			
			}
			else
			{
				
			/// SUCCESSFUL SEND 
			$outMsg = urlencode("Your password has been reset.");

			$options = ['cost' => 13];
			$inputPass = password_hash($inputPass, PASSWORD_BCRYPT, $options);
			
			$sql = "UPDATE user_accounts SET account_password=? WHERE recovery_string=?";
			$stmt= $dbfix->prepare($sql);
			$stmt->execute([$inputPass,$tokenRec]);
			
			$sql = "UPDATE user_accounts SET recovery_string=? WHERE recovery_string=?";
			$stmt= $dbfix->prepare($sql);
			$stmt->execute([0,$tokenRec]);


			$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
			header("Location: $outGo");
			}
		}
		else
		{
		$outMsg = urlencode("The passwords are different, please try again.");

		$outGo = "/lostpassword.php?msg=$outMsg&token=$tokenRec";
		
		echo $outGo;
		header("Location: $outGo");	
		}
	}
	else
	{
	$outMsg = urlencode("The password reset token is invalid. Please try again.");

	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
	header("Location: $outGo");
	}
}
}
else
{
$outMsg = urlencode("Capcha fail.");

$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
header("Location: $outGo");
}
?>