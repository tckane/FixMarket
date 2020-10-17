<?php


include("../control/mydbcon.php");


function encrypt($plaintext, $password) {
    $method = "AES-256-CBC";
    $key = hash('sha256', $password, true);
    $iv = openssl_random_pseudo_bytes(16);

    $ciphertext = openssl_encrypt($plaintext, $method, $key, OPENSSL_RAW_DATA, $iv);
    $hash = hash_hmac('sha256', $ciphertext . $iv, $key, true);

    return $iv . $hash . $ciphertext;
}



function decrypt($ivHashCiphertext, $password) {
    $method = "AES-256-CBC";
    $iv = substr($ivHashCiphertext, 0, 16);
    $hash = substr($ivHashCiphertext, 16, 32);
    $ciphertext = substr($ivHashCiphertext, 48);
    $key = hash('sha256', $password, true);

    if (!hash_equals(hash_hmac('sha256', $ciphertext . $iv, $key, true), $hash)) return null;

    return openssl_decrypt($ciphertext, $method, $key, OPENSSL_RAW_DATA, $iv);
}



////////////////// GET USER INPUT
//
//



if (isset($_POST["emailaddr"])) 
{
$inputEmail = strip_tags($_POST["emailaddr"]);

	if (filter_var($inputEmail, FILTER_VALIDATE_EMAIL))
	{
	$emailValid = "true";
	}
	else
	{
	$emailValid = "false";
	}

}

if (isset($_POST["userPass"])) 
{
$inputPass = strip_tags($_POST["userPass"]);


$passQu = "SELECT account_password FROM user_accounts WHERE account_email = :emailAddr";
$passGrab = $dbfix->prepare($passQu);	
$passGrab->execute([':emailAddr' => $inputEmail]);
$passGrab = $passGrab->fetch(PDO::FETCH_ASSOC);
$comPass = $passGrab["account_password"];

if (password_verify($inputPass, $comPass))
{
$inputPass = $comPass;
}
else
{
$inputPass = 0;
}
}



if ($_POST["addressLineOne"] == "") 
{
$inputCapcha = "pass";

}
else
{
$inputCapcha = "fail";
}




//
//
////////////////// GET USER INPUT ENDS





////////////////// CHECK DATABASE
//
//


// To begin validating the user, we first want to make sure it's not a bot

if ($inputCapcha == "pass")
{
	
	// Next, let's look for the username in the database
	
	
	$qu = "SELECT count(*) FROM user_accounts WHERE account_email = :emailAddr AND account_password = :passWrd";

	$do = $dbfix->prepare($qu);	
	$do->execute([':emailAddr' => $inputEmail, ':passWrd' => $inputPass]);
	$count = $do->fetch(PDO::FETCH_COLUMN);

	$getqu = "SELECT id, monicker FROM user_accounts WHERE account_email = :emailAddr AND account_password = :passWrd";

	$get = $dbfix->prepare($getqu);	
	$get->execute([':emailAddr' => $inputEmail, ':passWrd' => $inputPass]);
	$usrDetails = $get->fetch(PDO::FETCH_ASSOC);
	$uID = $usrDetails["id"];
	$monMc = $usrDetails["monicker"];


	// Database stuff over for the time being.




	// decide if logged in, do cookie, encrypt things.

	if ($count == 1)
	{

	
	
	$cookey = base64_encode(encrypt("$inputEmail", "$inputPass"));
	
	
	$sql = "UPDATE user_accounts SET login_cookie=? WHERE id=?";
	$stmt= $dbfix->prepare($sql);
	$stmt->execute([$cookey, $uID]);
	
	setcookie("Login", "$cookey", time() + 31536000, "/", "www.fixmarket.org", "secure", 1);
	
	if ($monMc  == "") $monMc = strstr($inputEmail, '@', true);
	
	
	
	
	$outMsg = urlencode("Welcome back, $monMc.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";

	header("Location: $outGo");
	
	exit;
	}
	else
	{
	$outMsg = urlencode("Invalid login details supplied, please try again.");
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

//
//
////////////////// LOGIN ENDS





?>