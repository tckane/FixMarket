<?php


///////////////////////////////////////////////////////
///
/// Fixmarket v0.000005
///
/// This file: control/mydbcon.php
///
///		Contents: 		
///		db connect
///
///////////////////////////////////////////////////////

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
$activity = "default";
}




////////////// CONNECT DATABASE
//
//
$dbxservername = "localhost";
$dbxusername = "username";
$dbxpassword = "password";

try {
    $dbfix = new PDO("mysql:host=$dbxservername;dbname=fixmarket", $dbxusername, $dbxpassword);

    $dbfix->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $dbstatus = 1; 
    }
catch(PDOException $e)
    {
    $dbxmsg = $e->getMessage();
	$dbstatus = 0;
    }
//
//
////////////// CONNECT DATABASE ENDS






















//
//
////////////////// HEADER ENDS



?>
