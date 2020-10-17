<?php

///////////////////////////////////////////////////////
///
/// PROFILE PAGE
///
///////////////////////////////////////////////////////


if (isset($_GET["msg"])) 
{
$msg = $_GET["msg"];
}
elseif (isset($_POST["msg"])) 
{
$msg = $_POST["msg"];
}
else
{
$msg = "";
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

if (isset($_GET["jobStatus"])) 
{
$jobStatus = $_GET["messageRead"];
}
elseif (isset($_POST["messageRead"])) 
{
$messageRead = $_POST["messageRead"];
}
else
{
$messageRead = 0;
}



if (isset($_GET["stateMessages"])) 
{
$stateMessages = $_GET["stateMessages"];
}
elseif (isset($_POST["stateMessages"])) 
{
$stateMessages = $_POST["stateMessages"];
}
else
{
$stateMessages = 1;
}


if (isset($_GET["page"])) 
{
$page = $_GET["page"];
}
elseif (isset($_POST["page"])) 
{
$page = $_POST["page"];
}
else
{
$page = 1;
}



// photo limit
$limit = 1; 


if (isset($_GET["page"] )) 
{
$page  = $_GET["page"]; 
} 
else 
{
$page = 1; 
};  




	
	
	if (isset($_GET["messageSubject"])) 
	{
	$messageSubject = strip_tags($_GET["messageSubject"]);
	}
	elseif (isset($_POST["messageSubject"])) 
	{
	$messageSubject = strip_tags($_POST["messageSubject"]);
	}
	else
	{
	$messageSubject = "";
	}	
		
		
		
	if (isset($_GET["messageText"])) 
	{
	$messageText = $_GET["messageText"];
	}
	elseif (isset($_POST["messageText"])) 
	{
	$messageText = $_POST["messageText"];
	}
	else
	{
	$messageText = "";
	}
		


	




$record_index = ($page-1) * $limit;   



if ($stateMessages == 1)
{



$qu = "SELECT count(*) FROM user_messages WHERE mail_to=:usrID AND mail_deleted=0";

$do = $dbfix->prepare($qu);	
$do->execute([':usrID' => $usrID]);
$messageCount = $do->fetch(PDO::FETCH_COLUMN);

	
	echo "<div class=\"jobmenu\">";




	$dbSelQu = "SELECT * FROM user_messages WHERE mail_to=:usrID AND mail_deleted=0 ORDER BY mail_read, mail_date DESC";
	$dbSel = $dbfix->prepare($dbSelQu);
	$dbSel->execute([':usrID' => $usrID]);
	$listMeat = $dbSel->fetchALL(PDO::FETCH_ASSOC);

	if ($messageCount < 1)
		echo "<p style=\"padding-right: 40px; font-weight: bold; font-size: 26px; text-shadow: 1px 1px 2px #111111;\">You don't yet have any messages.</p>";

	foreach($listMeat as $listMeats)
	{
		
			$messageID = $listMeats["id"];
			$messageSubject = $listMeats["mail_subject"];
			$mailFrom = $listMeats["mail_from"];
			$messageDate = $listMeats["mail_date"];		
			$messageRead = $listMeats["mail_read"];			
		//	if ($mailFrom == "") $mailFrom = 0;			

						
			$messageDate = date('M jS, g:ia',strtotime($messageDate)); 


			if ($messageRead < 1)
			{
				$listClass = "unread";
			}
			else
			{
				$listClass = "listing";				
			}

			$dbGetSubjectFromJob = "SELECT * FROM user_jobs WHERE id=:messageSubject";
			$dbGetSubjectFromJob = $dbfix->prepare($dbGetSubjectFromJob);
			$dbGetSubjectFromJob->execute([':messageSubject' => $messageSubject]);
			$jobMeat = $dbGetSubjectFromJob->fetch(PDO::FETCH_ASSOC);
			$messageSubject = $jobMeat["job_title"];


			if (strlen($messageSubject) > 19)
			{
				$messageSubject = substr("$messageSubject", 0, 19);
				$messageSubject = "$messageSubject...";
			}
			else
			{
			$messageSubject = $messageSubject;
			}	


			

			$dbSelO = "SELECT * FROM user_accounts WHERE id=:mailFrom";
			$dbSelO = $dbfix->prepare($dbSelO);
			$dbSelO->execute([':mailFrom' => $mailFrom]);
			$ownerMeat = $dbSelO->fetch(PDO::FETCH_ASSOC);
			$usrNickHere = $ownerMeat["monicker"];
			$userEmailHere = $ownerMeat["account_email"];
	

			if ($usrNickHere == "") $saluTationHere = strstr($userEmailHere, '@', true);	
			else $saluTationHere = $usrNickHere;
	
	


			if (strlen($saluTationHere) > 7)
			{
				$saluTationHere = substr("$saluTationHere", 0, 7);
				$saluTationHere = "$saluTationHere...";
			}
			else
			{
			$saluTationHere = $saluTationHere;
			}	




					
			echo "<a href=\"/myaccount.php?activity=mail&amp;stateMessages=1&amp;messageSelect=$messageID\" class=\"$listClass\" style=\"float:left\">
			$messageSubject<br/>From: $saluTationHere<br/>
			Date: $messageDate
			</a>";
	}
echo "</div>";

	
	
	
	
	
	$dbSelQu = "SELECT * FROM user_messages WHERE id=:messageSelect AND mail_deleted=0";
	$dbSel = $dbfix->prepare($dbSelQu);
	$dbSel->execute([':messageSelect' => $messageSelect]);
	$messageMeat = $dbSel->fetch(PDO::FETCH_ASSOC);
	$messageSubject = $messageMeat["mail_subject"];
	$messageText = $messageMeat["mail_body"];
	$messageDate = $messageMeat["mail_date"];
	$mailFrom = $messageMeat["mail_from"];	
	
	$stmt = $dbfix->prepare("UPDATE user_messages set read_date=now(), mail_read=1 WHERE id=:messageSelect");
	$stmt->execute([':messageSelect' => $messageSelect]);

	
	
	$dbSelO = "SELECT * FROM user_accounts WHERE id=:mailFrom";
	$dbSelO = $dbfix->prepare($dbSelO);
	$dbSelO->execute([':mailFrom' => $mailFrom]);
	$ownerMeat = $dbSelO->fetch(PDO::FETCH_ASSOC);
	$usrNick = $ownerMeat["monicker"];
	$userEmail = $ownerMeat["account_email"];
	

	

	if ($usrNick == "") $saluTation = strstr($userEmail, '@', true);
	else $saluTationHere = $usrNick;
	
	
	$dbGetSubjectFromJob = "SELECT * FROM user_jobs WHERE id=:messageSubject";
	$dbGetSubjectFromJob = $dbfix->prepare($dbGetSubjectFromJob);
	$dbGetSubjectFromJob->execute([':messageSubject' => $messageSubject]);
	$jobMeat = $dbGetSubjectFromJob->fetch(PDO::FETCH_ASSOC);
	$messageSubject = $jobMeat["job_title"];
	
	
	if (strlen($messageSubject) > 29)
	{
	$messageSubject = substr("$messageSubject", 0, 29);
	$messageSubject = "$messageSubject...";
	}	
	
	
	echo "<div class=\"jtcontainer\"><div class=\"jobtable\">";




	If ($messageSelect > 0)
	{
	echo "<div class=\"jobheader\" style=\"text-align: center;\">Re: $messageSubject</div>";
	
	
	echo "<noscript><div class=\"jobheader\" style=\"color: $siteBgCol; background: $siteTextCol; text-align: center;\">Your must enable JavaScript to use this function.<br/>
	Sorry about that old bean but we promise no funny stuff.<br/>only enable javascript for just $_SERVER[HTTP_HOST] and nothing more.</div></noscript>";
	

		
	echo "<div class=\"form-style-2\"><form action=\"/account/mymessages.php\" method=\"post\">";


		
	echo "<div class=\"jobsubheader\">Message From: $saluTation</div>";	
	
	echo "<div style=\"border-top: 2px solid $siteTextCol; border-bottom: 2px solid $siteTextCol; padding: 8px;\">$messageText</div>";	
	


		
	echo "<div class=\"jobsubheader\">
	<img class=\"icons\" src=\"/assets/images/icons/edit.png\"/>Your Reply</div>
	<div class=\"jobcontext\">Tip: Always be weary of bad actors; never pay before the job is done, always tell someone who you are meeting and take a friend with you.  Get address and phone number up front and never disclose sensitive details passwords and banking details.</div>";
	
	echo "<br/><textarea id=\"messageText\" class=\"messageText\" style=\"height: 400px;\" name=\"messageText\"></textarea><br/>";
	

	echo "<div style=\"padding-bottom: 25px;\">
	<input type=\"hidden\" name=\"stateMessages\" value=\"reply\"/>
	<input type=\"hidden\" name=\"activity\" value=\"$activity\"/>
	<input type=\"hidden\" name=\"messageSelect\" value=\"$messageSelect\"/>
	<div style=\"text-align: center;\">";
		
		
		
		// buttons now
		
	echo "<button class=\"bnormal\" type=\"submit\" style=\"text-align: center; display: inline-block; width: 40%; border: 3px solid green;\">Send Reply</button>";	
			
			
			
	echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid red;\" formaction=\"/account/mymessages.php?jobID=$messageSelect&amp;stateMessages=delist\">Delete</button>";
	
	
	
	if ($messageRead == 1)
	{
	echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid green;\" formaction=\"/account/mymessages.php?jobID=$messageSelect&amp;stateMessages=unread\">Mark Unread</button>";
	}
	

	
	echo "</div></form><span style=\"padding: 12px;\">&nbsp;</span></div>";
	}
	else
	{
	
	
		

	
	
	
	echo "<div class=\"jobheader\" style=\"text-align: center;\">Messages</div>";		
	
	
	echo "<div class=\"jobsubheader\" style=\"font-size: 23px; text-align: center; width: 500px; margin-left: auto;
    margin-right: auto;\"><br/><img src=\"/assets/images/icons/mail.png\"/><br/>

	Responses to your listings, as well as responses to your enquiries of other people's listings, will appear in this space.<br/><br/>Messages will appear in a list on the left; clicking on one will open the message in this space and you can type your reply in the space below.<br/><br/>First contact is made through Fixer Ads or Fix Requests.
	<div></div>";

	}	

	
	echo "</div></div>";



}





///////###########################################################


if ($stateMessages == "reply")
{
	


	
	
	if ($_COOKIE["Login"] != "")
	{
		
	include("../control/mydbcon.php");	
		
	$brCookie = $_COOKIE["Login"];
	
	
	$cooq = "SELECT * FROM user_accounts WHERE login_cookie = ?";

	$cooq = $dbfix->prepare($cooq);	
	$cooq->execute([$_COOKIE["Login"]]);
	
	$cooq = $cooq->fetch(PDO::FETCH_ASSOC);
	$usrID = $cooq["id"];
	$userEmail = $cooq["account_email"];
	}
	
	
	set_time_limit(0);
	
	ini_set("max_execution_time", "-1");
	ini_set("post_max_size", "200M");
	ini_set("memory_limit", "1000M");
	ini_set("upload_max_filesize", "200M");
	
						
	////////////// PHONE NUMBER & MONEY
//
//
//





	if (strlen($messageText) >= 1)
	{	
	
	$grabMsgDetails = "SELECT mail_subject, mail_from FROM user_messages WHERE mail_to=:usrID AND id=:messageSelect";
	$grabMsgDetails = $dbfix->prepare($grabMsgDetails);
	$grabMsgDetails->execute([':usrID' => $usrID,':messageSelect' => $messageSelect]);
	$msgMeat = $grabMsgDetails->fetch(PDO::FETCH_ASSOC);
	$sendTo = $msgMeat["mail_from"];
	$sendSubject = $msgMeat["mail_subject"];
	
	
	$statement = $dbfix->prepare('INSERT INTO user_messages (mail_subject, mail_body, mail_from, mail_to) VALUES (?, ?, ?, ?)');
	$statement->execute([$sendSubject, $messageText, $usrID, $sendTo]);
	
	
	
	$msg = urlencode("Message Sent! ");	
	$outGo = "/myaccount.php?msg=$msg&activity=mail";
	header("Location: $outGo");
	exit;
	}
	else
	{
	$msg = urlencode("Message not sent this time. ");	
	$outGo = "/myaccount.php?msg=$msg&activity=mail";
	header("Location: $outGo");
	exit;		
	}

}












if ($stateMessages == "delist")
{
		
	ini_set('display_errors', 1);
	error_reporting(E_ALL);
	
	if ($messageSelect != "")
	{

		if ($_COOKIE["Login"] != "")
		{
			
		include("../control/mydbcon.php");	
			
		$brCookie = $_COOKIE["Login"];
		
		
		$cooq = "SELECT * FROM user_accounts WHERE login_cookie = ?";

		$cooq = $dbfix->prepare($cooq);	
		$cooq->execute([$_COOKIE["Login"]]);
		
		$cooq = $cooq->fetch(PDO::FETCH_ASSOC);
		$usrID = $cooq["id"];
		}
		
	$stmt = $dbfix->prepare("UPDATE user_messages set mail_deleted=1 WHERE id=:messageSelect AND mail_to=:usrID");
	$stmt->execute([':messageSelect' => $messageSelect,':usrID' => $usrID,]);
	
	$msg = urlencode("Message Deleted.");	
	$outGo = "/myaccount.php?msg=$msg&activity=mail";
	header("Location: $outGo");
	exit;
	}
	else
	{
	$msg = urlencode("Message Potentially Deleted.");	
	$outGo = "/myaccount.php?msg=$msg&activity=mail";
	header("Location: $outGo");
	exit;	
	}

}























if ($stateMessages == "unread")
{
		
	ini_set('display_errors', 1);
	error_reporting(E_ALL);
	
	if ($messageSelect != "")
	{

		if ($_COOKIE["Login"] != "")
		{
			
		include("../control/mydbcon.php");	
			
		$brCookie = $_COOKIE["Login"];
		
		
		$cooq = "SELECT * FROM user_accounts WHERE login_cookie = ?";

		$cooq = $dbfix->prepare($cooq);	
		$cooq->execute([$_COOKIE["Login"]]);
		
		$cooq = $cooq->fetch(PDO::FETCH_ASSOC);
		$usrID = $cooq["id"];
		}
		
	$stmt = $dbfix->prepare("UPDATE user_messages set mail_read=0 WHERE id=:messageSelect AND mail_to=:usrID");
	$stmt->execute([':messageSelect' => $messageSelect,':usrID' => $usrID,]);
	
	$msg = urlencode("Message Marked Unread.");	
	$outGo = "/myaccount.php?msg=$msg&activity=mail";
	header("Location: $outGo");
	exit;
	}
	else
	{
	$msg = urlencode("Message Potentially Marked Unread.");	
	$outGo = "/myaccount.php?msg=$msg&activity=mail";
	header("Location: $outGo");
	exit;	
	}

}







?>
