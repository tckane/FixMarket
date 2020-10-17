<?php

include("../control/mydbcon.php");




////////////////// SIMPLY LEAVE
//
//


	$outCookie = "Monster";
	
	if ($_COOKIE['Login'] != "")
	{
	$currentCookie = $_COOKIE["Login"];
	}

	$sql = "UPDATE user_accounts SET login_cookie=? WHERE login_cookie=?";
	$stmt= $dbfix->prepare($sql);
	$stmt->execute([$outCookie, $currentCookie]);
	
	

	if (isset($_COOKIE["Login"])) {
    unset($_COOKIE["Login"]);
	setcookie("Login", "$outCookie", time() - 31536000, "/", "www.fixmarket.org", "secure", 1);
	}


//
//
////////////////// SIMPLY LEAVE ENDS

$outMsg = urlencode("See you soon!");
$outGo = "/myaccount.php?msg=$outMsg";
	header("Location: $outGo");


?>