<?php
include("../control/mydbcon.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);


if (isset($_GET["gid"])) 
{
$gid = $_GET["gid"];
}




////////////////// CHECK IF USER EXISTS
//
//

$qu = "SELECT count(*) FROM user_accounts WHERE id = :id";

$do = $dbfix->prepare($qu);	
$do->execute([':id' => $gid]);
$userCount = $do->fetch(PDO::FETCH_COLUMN);


if ($userCount == 1)
{
	
	
$passQu = "SELECT account_email FROM user_accounts WHERE id = :id";
$passGrab = $dbfix->prepare($passQu);	
$passGrab->execute([':id' => $gid]);
$passGrab = $passGrab->fetch(PDO::FETCH_ASSOC);
$inputEmail = $passGrab["account_email"];
	
	
$str = rand(1,99); 
$comPass = hash("sha256", $str); 
	
	
$sql = "UPDATE user_accounts SET account_activation_string=? WHERE id=?";
$stmt= $dbfix->prepare($sql);
$stmt->execute([$comPass, $gid]);
	
include 'Mail.php';
include 'Mail/mime.php';

$httphost = $_SERVER["HTTP_HOST"];
$activateLink = "https://$httphost/do/doactivate.php?token=$comPass";

$text = "Welcome to fixmarket.org!<br/><br/>
To get started, please click on the link below to activate your account.<br/><br/>$activateLink";

$html = "Welcome to fixmarket.org!<br/><br/>
To get started, please click on the link below to activate your account.<br/><br/>$activateLink";



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



include("../control/emailsettings.php");


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

$sendResult = $mail->send($inputEmail, $hdrs, $body);

	if (PEAR::isError($sendResult))
	{


	$httphost = $_SERVER["HTTP_HOST"];
	$activateLink = "https://$httphost/do/doactivate.php?token=$comPass";

	$text = "Welcome to fixmarket.org!<br/><br/>
	To get started, please click on the link below to activate your account.<br/><br/>$activateLink<br/><br/><br/><br/>* Our regular email server is currently overloaded so our system has automatically switched to Google backup.<br/><br/>To ensure this email has definitely come from us, you can check that the link above points to fixmarket.org and copy and paste it into your browser, rather than clicking on the link directly.";

	$html = "Welcome to fixmarket.org!<br/><br/>
	To get started, please click on the link below to activate your account.<br/><br/>$activateLink<br/><br/><br/><br/>* Our regular email server is currently overloaded so our system has automatically switched to Google backup.<br/><br/>To ensure this email has definitely come from us, you can check that the link above points to fixmarket.org and copy and paste it into your browser, rather than clicking on the link directly.";


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
		
		$SMTPhost = "ssl://smtp.gmail.com";
		$SMTPport = "465";
		$SMTPusername = "fixmarket.org@gmail.com";
		$SMTPpassword = "yjnzrlobyuiktzhc";
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
		$outMsg = urlencode("A new verification email has been sent to $inputEmail, please click on the link to activate your account.  If you cannot see the email, please check the spam folder.");
			
		$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
		header("Location: $outGo");
		exit;
		}			
	}
	else
	{
		
	/// SUCCESSFUL SEND 
	$outMsg = urlencode("A new verification email has been sent to $inputEmail, please click on the link to activate your account.  If you cannot see the email, please check the spam folder.");

	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
	header("Location: $outGo");
	}
}
else
{
	echo "no user";
}

?>