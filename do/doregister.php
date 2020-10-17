<?php
include("../control/mydbcon.php");

ini_set('display_errors', 1);
error_reporting(E_ALL);


if (isset($_POST["emailaddr"])) 
{
$inputEmail = strip_tags($_POST["emailaddr"]);
}


if (isset($_POST["userPass"])) 
{
$inputPass = strip_tags($_POST["userPass"]);
}


if (isset($_POST["userPassAgain"])) 
{
$inputPassAgain = strip_tags($_POST["userPassAgain"]);
}

if (isset($_POST["addressLineOne"])) 
{
$addressLineOne = strip_tags($_POST["addressLineOne"]);
}


///////////////////// ENCRYPT PASSWORD INTO THE DATABASE

function encrypt($plaintext, $password) {
    $method = "AES-256-CBC";
    $key = hash('sha256', $password, true);
    $iv = openssl_random_pseudo_bytes(16);

    $ciphertext = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $iv);
    $hash = hash_hmac('sha256', $ciphertext . $iv, $key, true);

    return $iv . $hash . $ciphertext;
}


$str = rand(1,99); 
$randy = hash("sha256", $str); 
 
  
//////////// honeypot capcha

////////////////// CHECK IF USER ALREADY EXISTS
//
//

$qu = "SELECT count(*) FROM user_accounts WHERE account_email = :emailAddr";

$do = $dbfix->prepare($qu);	
$do->execute([':emailAddr' => $inputEmail]);
$userCount = $do->fetch(PDO::FETCH_COLUMN);


include("../control/emailsettings.php");

if ($addressLineOne == "")
{
	if (filter_var($inputEmail, FILTER_VALIDATE_EMAIL))
	{
		if ($userCount == 0)
		{
			if ($inputPass == "$inputPassAgain" && $inputPass != "" && $inputPassAgain != "")
			{
				
				include 'Mail.php';
				include 'Mail/mime.php';

				$httphost = $_SERVER["HTTP_HOST"];
				$activateLink = "https://$httphost/do/doactivate.php?token=$randy";

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
						$outMsg = urlencode("Sign-up was successful, a verification email has been sent to $inputEmail, please click on the link to activate your account.  If you cannot see the email, please check the spam folder.");
							
							
						$options = ['cost' => 13];
						$inputPass = password_hash($inputPass, PASSWORD_BCRYPT, $options);


						$statement = $dbfix->prepare('INSERT INTO user_accounts (account_email, account_password, account_activation_string) VALUES (?, ?, ?)');
						$statement->execute([$inputEmail, $inputPass, $randy]);
						$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
						header("Location: $outGo");
						exit;
						}			
				}
				else
				{
					
				/// SUCCESSFUL SEND 
				$outMsg = urlencode("Sign-up was successful, a verification email has been sent to $inputEmail, please click on the link to activate your account.  If you cannot see the email, please check the spam folder.");
				
				
				$options = ['cost' => 13];
				$inputPass = password_hash($inputPass, PASSWORD_BCRYPT, $options);


				$statement = $dbfix->prepare('INSERT INTO user_accounts (account_email, account_password, account_activation_string) VALUES (?, ?, ?)');
				$statement->execute([$inputEmail, $inputPass, $randy]);
				$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
				header("Location: $outGo");
				}

			}
			else
			{
			$outMsg = urlencode("The passwords supplied do not match.");
			$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
			header("Location: $outGo");
			exit;
			}
		}
		else
		{
		$outMsg = urlencode("There is already an account associated with $inputEmail.");
		$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
		header("Location: $outGo");
		exit;
		}
	}
	else
	{
	$outMsg = urlencode("$inputEmail appears to be an invalid email address.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
	header("Location: $outGo");
	exit;
	}

}
else
{
$outMsg = urlencode("Something went wrong, please try again.");
$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
header("Location: $outGo");
exit;
}




?>