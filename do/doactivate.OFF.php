<?php

include("../control/mydbcon.php");


////////////////// SIMPLY LEAVE
//
//

	$emailToken = $_GET["token"];


	$qu = "SELECT count(*) FROM user_accounts WHERE account_activation_string = :token";

	$do = $dbfix->prepare($qu);	
	$do->execute([':token' => $emailToken]);
	$count = $do->fetch(PDO::FETCH_COLUMN);

	if ($count == 1)
	{
	$sql = "UPDATE user_accounts SET account_activated=? WHERE account_activation_string=?";
	$stmt= $dbfix->prepare($sql);
	$stmt->execute([1, $emailToken]);
	
	$outMsg = urlencode("Account activated.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
	header("Location: $outGo");
	}
	else
	{
	$outMsg = urlencode("Account activation token expired.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=$activity";
	header("Location: $outGo");	
	}

//
//
////////////////// SIMPLY LEAVE ENDS



?>