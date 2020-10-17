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

if (isset($_GET["jobStatus"])) 
{
$jobStatus = $_GET["jobStatus"];
}
elseif (isset($_POST["jobStatus"])) 
{
$jobStatus = $_POST["jobStatus"];
}
else
{
$jobStatus = 0;
}



if (isset($_GET["stateListings"])) 
{
$stateListings = $_GET["stateListings"];
}
elseif (isset($_POST["stateListings"])) 
{
$stateListings = $_POST["stateListings"];
}
else
{
$stateListings = 1;
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



	
	
	
	if (isset($_GET["streetAddress"])) 
	{
	$streetAddress = strip_tags($_GET["streetAddress"]);
	}
	elseif (isset($_POST["streetAddress"])) 
	{
	$streetAddress = strip_tags($_POST["streetAddress"]);
	}
	else
	{
	$streetAddress = 0;
	}



	if (isset($_GET["cityAddress"])) 
	{
	$cityAddress = strip_tags($_GET["cityAddress"]);
	}
	elseif (isset($_POST["cityAddress"])) 
	{
	$cityAddress = strip_tags($_POST["cityAddress"]);
	}
	else
	{
	$cityAddress = 0;
	}



	if (isset($_GET["postcodeAddress"])) 
	{
	$postcodeAddress = strip_tags($_GET["postcodeAddress"]);
	}
	elseif (isset($_POST["postcodeAddress"])) 
	{
	$postcodeAddress = strip_tags($_POST["postcodeAddress"]);
	}
	else
	{
	$postcodeAddress = 0;
	}


	
	
	if (isset($_GET["listingTitle"])) 
	{
	$listingTitle = strip_tags($_GET["listingTitle"]);
	}
	elseif (isset($_POST["listingTitle"])) 
	{
	$listingTitle = strip_tags($_POST["listingTitle"]);
	}
	else
	{
	$listingTitle = "";
	}	
		
		
		
	if (isset($_GET["listingText"])) 
	{
	$listingText = $_GET["listingText"];
	}
	elseif (isset($_POST["listingText"])) 
	{
	$listingText = $_POST["listingText"];
	}
	else
	{
	$listingText = "";
	}
		
	if (isset($_GET["listingPhotos"])) 
	{
	$listingPhotos = $_GET["listingPhotos"];
	}
	elseif (isset($_POST["listingPhotos"])) 
	{
	$listingPhotos = $_POST["listingPhotos"];
	}
	else
	{
	$listingPhotos = "";
	}


	if (isset($_GET["guidePrice"])) 
	{
	$guidePrice = strip_tags($_GET["guidePrice"]);
	}
	elseif (isset($_POST["guidePrice"])) 
	{
	$guidePrice = strip_tags($_POST["guidePrice"]);
	}
	else
	{
	$guidePrice = "";
	}


	if (isset($_GET["addressText"])) 
	{
	$addressText = $_GET["addressText"];
	}
	elseif (isset($_POST["addressText"])) 
	{
	$addressText = $_POST["addressText"];
	}
	else
	{
	$addressText = "";
	}


	if (isset($_GET["jobDeadlineDate"])) 
	{
	$jobDeadlineDate = $_GET["jobDeadlineDate"];
	}
	elseif (isset($_POST["jobDeadlineDate"])) 
	{
	$jobDeadlineDate = $_POST["jobDeadlineDate"];
	}
	else
	{
	$jobDeadlineDate = "";
	}


	if (isset($_GET["phoneNumber"])) 
	{
	$phoneNumber = strip_tags($_GET["phoneNumber"]);
	}
	elseif (isset($_POST["phoneNumber"])) 
	{
	$phoneNumber = strip_tags($_POST["phoneNumber"]);
	}
	else
	{
	$phoneNumber = stripslashes("");
	}


	if (isset($_GET["emailAddress"])) 
	{
	$emailAddress = strip_tags($_GET["emailAddress"]);
	}
	elseif (isset($_POST["emailAddress"])) 
	{
	$emailAddress = strip_tags($_POST["emailAddress"]);
	}
	else
	{
	$emailAddress = stripslashes("");
	}
	
	


$record_index = ($page-1) * $limit;   



if ($stateListings == 1)
{



$job_owner = $usrDetails["id"];

$qu = "SELECT count(*) FROM user_jobs WHERE job_owner=:job_owner";

$do = $dbfix->prepare($qu);	
$do->execute([':job_owner' => $job_owner]);
$listingCount = $do->fetch(PDO::FETCH_COLUMN);
if ($listingCount > 1) $lisTxt = "listings";
else $lisTxt = "listing";
	

	
	echo "<div class=\"jobmenu\">";




	$dbSelQu = "SELECT * FROM user_jobs WHERE job_owner=:job_owner";
	$dbSel = $dbfix->prepare($dbSelQu);
	$dbSel->execute([':job_owner' => $job_owner]);
	$listMeat = $dbSel->fetchALL(PDO::FETCH_ASSOC);

	if ($listingCount < 1) echo "<p style=\"padding-right: 40px; font-weight: bold; font-size: 26px; text-shadow: 1px 1px 2px #111111;\">You don't yet have any Fix Requests.<br/>You can get started by filling out the form on the right.</p>";

	foreach($listMeat as $listMeats)
	{
		
			$jobID = $listMeats["id"];
			$jobTitle = $listMeats["job_title"];
			$jobDesc = $listMeats["job_description"];
			$jobPrice = $listMeats["job_bounty"];
			$jobDeadline = $listMeats["job_deadline"];	
				
			if (strlen($jobTitle) > 19)
			{
				$jobTitle = substr("$jobTitle", 0, 19);
				$jobTitle = "$jobTitle...";
			}
			else
			{
			$jobDesc = $jobDesc;
			}		

			if (strlen($jobPrice) > 7)
			{
				$jobPrice = substr("$jobPrice", 0, 7);
				$jobPrice = "$jobPrice...";
			}
			else
			{
			$jobDesc = $jobDesc;
			}	



			
			$jobDeadline = date('M jS',strtotime($jobDeadline)); 

					
			echo "<a href=\"/myaccount.php?activity=listings&amp;stateListings=1&amp;jobSelect=$jobID\" class=\"listing\" style=\"float:left\">
			$jobTitle<br/>Deadline: $jobDeadline<br/>
			Guide Price: &#163;$jobPrice
			</a>";
	}


echo "<br/><a href=\"/myaccount.php?activity=listings\" class=\"listing\" style=\"float:left; height: 28px; text-align: center; padding:4px; font-size: 20px; font-weight: bold;\">Create Fix Request</a></div>";


	
	$dbSelQu = "SELECT * FROM user_jobs WHERE id=:jobid";
	$dbSel = $dbfix->prepare($dbSelQu);
	$dbSel->execute([':jobid' => $jobSelect]);
	$jobMeat = $dbSel->fetch(PDO::FETCH_ASSOC);
	$jobTitle = $jobMeat["job_title"];
	$jobDesc = $jobMeat["job_description"];
	$jobPrice = $jobMeat["job_bounty"];
	$jobDeadline = $jobMeat["job_deadline"];	
	$jobOwner = $jobMeat["job_owner"];
	$jobStatus = $jobMeat["job_status"];
			

	
	

	
	
if (isset($jobDeadline))
{
$jobDeadlineDate = explode('-', $jobDeadline);
$jobDeadlineY = $jobDeadlineDate[0];
$jobDeadlineM   = $jobDeadlineDate[1];
$jobDeadlineD  = $jobDeadlineDate[2];
}
	
	
	
	$dbSelO = "SELECT * FROM user_accounts WHERE id=:jobOwner";
	$dbSelO = $dbfix->prepare($dbSelO);
	$dbSelO->execute([':jobOwner' => $jobOwner]);
	$ownerMeat = $dbSelO->fetch(PDO::FETCH_ASSOC);
	$usrNick = $ownerMeat["monicker"];
	$userEmail = $ownerMeat["account_email"];
	$usrCity = $ownerMeat["acity"];
	$usrPostcode = $ownerMeat["apostcode"];
	$usrAddrOne = $ownerMeat["aaddress_one"];
	$usrCounty = $ownerMeat["acounty"];
	$usrCountry = $ownerMeat["acountry"];
	$usrPhone = $ownerMeat["aphone_one"];	
	$usrPrefix = $ownerMeat["aphone_prefix"];	
	$usrID = $ownerMeat["id"];	
		
	
	if ($userEmail == "") $userEmail = $accEmail;
	if ($usrPhone == "") $usrPhone = $accPhone;	
	if ($usrCity == "") $usrCity = $accCity;
	if ($usrPostcode == "") $usrPostcode = $accPostcode;
	
	if ($usrNick == "") $usrNick = strstr($userEmail, '@', true);
	
	
	if (strlen($jobTitle) > 29)
	{
	$jobTitle = substr("$jobTitle", 0, 29);
	$jobTitle = "$jobTitle...";
	}	
	
	
	echo "<div class=\"jtcontainer\"><div class=\"jobtable\">";

	if ($jobSelect < 1 && $activity == "listings")
	{
	echo "<div class=\"jobheader\" style=\"text-align: center;\">Create a new fix request or select one to edit from the list.</div>";
	}
	else
	{
		
	// see where user was to decide what to do with images
	$lastLoc = "jobs";
	$stmt = $dbfix->prepare("UPDATE user_accounts set user_lastseen=now(), last_job=:jobSelect, last_location=:lastLoc WHERE id=:usrID");
	$stmt->execute([':usrID' => $usrID,':jobSelect' => $jobSelect,':lastLoc' => $lastLoc]);	
		
		
	echo "<div class=\"jobheader\" style=\"text-align: center;\">Edit Fix Request: $jobTitle</div>";
	}



	echo "<noscript><div class=\"jobheader\" style=\"color: $siteBgCol; background: $siteTextCol; text-align: center;\">Your must enable JavaScript to use this function.<br/>
	Sorry about that old bean but we promise no funny stuff.<br/>only enable javascript for just $_SERVER[HTTP_HOST] and nothing more.</div></noscript>";
	

		
	echo "<div class=\"form-style-2\"><form action=\"/account/mylistings.php\" method=\"post\">";


	if ($jobSelect > 0)
	{
	$titleGore = "Edit Fix Request Title";
	}
	else
	{
	$titleGore = "Create Fix Request Title";
	}	
		
	echo "<div class=\"jobsubheader\"><img class=\"icons\" src=\"/assets/images/icons/edit.png\"/> $titleGore</div>
	<div class=\"jobcontext\">Tip: &quot;iPhone SE Cracked Screen&quot; works much better than &quot;my fone broke&quot;</div>
	<p id=\"listingTitle\" name=\"listingTitle\" class=\"lineEdit\">$jobTitle</p>";	
	

	if ($jobSelect > 0)
	{
	$titleGore = "Edit Job Description";
	}
	else
	{
	$titleGore = "Create Job Description";
	}

		
	echo "<div class=\"jobsubheader\">
	<img class=\"icons\" src=\"/assets/images/icons/edit.png\"/> $titleGore</div>
	<div class=\"jobcontext\">Try to include as much information as you can, for instance, if anyone else has tried to repair the item before or if it's been in water.<br/>Please also be aware that it may not be possible for an item to be fixed and it may end up in a worse state for trying. Be specific about your expectations in this context and remember that anyone repairing your devices may gain access to your personal information, so you must take steps to secure your data before handing over your device.</div>";
	
	echo "<div class=\"listingText\" id=\"listingText\" style=\"height: 400px;\" name=\"listingText\">$jobDesc</div>";
	
	
	
	echo "<div class=\"jobsubheader\"><img class=\"icons\" src=\"/assets/images/icons/edit.png\"/> Edit Fix Request Details</div>";
	

	echo "<div class=\"jobsubtitle\">Job Deadline</div>";
	
	
	
	
	$jobDeadline = date('M jS, Y',strtotime($jobDeadline)); 	
	
	$plus7days = date('Y-m-d', strtotime("+7 days"));
	$plus14days = date('Y-m-d', strtotime("+14 days"));
	$plus30days = date('Y-m-d', strtotime("+30 days"));
	
	$nice7days = date('M jS, Y',strtotime($plus7days)); 
	$nice14days = date('M jS, Y',strtotime($plus14days)); 	
	$nice30days = date('M jS, Y',strtotime($plus30days)); 	
	
	

	
	echo "<div><select name=\"jobDeadlineDate\" id=\"jobDeadlineDate\" class=\"dateofdeadline\" style=\"width: 100%;\">
	<optgroup>";

  	if ($jobSelect > 0) echo "<option value=\"\">Use Current - Expires $jobDeadline</option>";
  	echo "<option value=\"$plus7days\">7 Days - Expires $nice7days</option>";
  	echo "<option value=\"$plus14days\">14 Days - Expires $nice14days</option>";
  	echo "<option value=\"$plus30days\">30 Days - Expires $nice30days</option>";
	
	echo "</optgroup>
	</select></div><br/>";
	
	echo "<div class=\"jobsubtitle\">Guide Price</div><div class=\"jobcontext\">This is how much you'd like to spend; a jumping-off point for negotiation.</div>
	<p id=\"guidePrice\" name=\"guidePrice\" class=\"lineEdit\">&#163;$jobPrice</p>";
	

	echo "<div class=\"jobsubtitle\">City</div>
	<div class=\"jobcontext\">Note: This will update the city for all of your listings.</div>
	<p id=\"cityAddress\" name=\"cityAddress\" class=\"lineEdit\">$usrCity</p>";



	echo "<div class=\"jobsubtitle\">Postcode</div>
	<div class=\"jobcontext\">Note: This will update the post code for all of your listings.</div>
	<p id=\"postcodeAddress\" name=\"postcodeAddress\" class=\"lineEdit\">$usrPostcode</p>";
	
	
	
	
	echo "<div class=\"jobsubtitle\">Phone</div>
	<div class=\"jobcontext\">Note: This will update the phone number for all of your listings.</div>
	<p id=\"phoneNumber\" name=\"phoneNumber\" class=\"lineEdit\">$usrPhone</p>";
	
	echo "<div class=\"jobsubtitle\">Email Address</div>
	<div class=\"jobcontext\">If this is different from your login email, you'll need to click on a confirmation link.<br/>
	This will also update the email address for all of your listings</div>
	<p id=\"emailAddress\" name=\"emailAddress\" class=\"lineEdit\">$userEmail</p>";
	


	
	if ($jobSelect > 0)
	{
	
	echo "<div class=\"jobsubheader\"><img class=\"icons\" src=\"/assets/images/icons/gallery.png\"/> Add Photos</div><div class=\"jobcontext\">You can include up to 9 photos per fix request. To delete a photo, remove it's thumbnail from the space below and submit your fix request.<br/>
	</div>
	<div class=\"listingPhotos\" id=\"listingPhotos\" style=\"height: 240px;\">";
	
	$getPix = "SELECT * FROM user_gallery WHERE job_id=:jobSelect";
	$getPix = $dbfix->prepare($getPix);
	$getPix->execute([':jobSelect' => $jobSelect]);
	$picMeats = $getPix->fetchALL(PDO::FETCH_ASSOC);
	
	
			
	foreach($picMeats as $picMeat)
	{
	$mea = $picMeat["file"];
	
	echo "<img src=\"/photostore/index.php?imgFile=$mea\"/>";
	}
			
			
	echo "</div><div class=\"jobcontext\">Photos will appear larger on the published fix request.<br/><br/></div>";

	
	echo "<input type=\"hidden\" name=\"stateListings\" value=\"savechanges\"/>		
	<input type=\"hidden\" name=\"page\" value=\"$page\"/>
	<input type=\"hidden\" name=\"jobSelect\" value=\"$jobSelect\"/>";
	}
	else
	{ // if empty record
		
	echo "<div class=\"gensubheader\" style=\"text-align: center; font-size: 24px;\">Once your fix request has been created you will to add photos of your broken device.</div>";
	echo "<input type=\"hidden\" name=\"stateListings\" value=\"newlisting\"/>";
		
	}
	
	

	echo "</div>
	<div style=\"padding-bottom: 25px;\"><input type=\"hidden\" name=\"activity\" value=\"$activity\"/><div style=\"text-align: center;\">";
	
	

	
	
	
	if ($jobSelect < 1)
	{
	echo "<button class=\"bnormal\" type=\"submit\" style=\"text-align: center; display: inline-block; width: 80%; border: 3px solid green;\">Save &amp; Publish</button>";
	
	echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 20%; border: 3px solid red;\" formaction=\"/account/mylistings.php\" >Cancel</button>";
	}
	else
	{
	echo "<button class=\"bnormal\" type=\"submit\" style=\"text-align: center; display: inline-block; width: 50%; border: 3px solid green;\">Save &amp; Publish</button>";	
			
	echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid red;\" formaction=\"/account/mylistings.php?jobID=$jobSelect&amp;stateListings=delist\" >Delete</button>";
	
		if ($jobStatus == 0)
		{
		echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid green;\" formaction=\"/account/mylistings.php?jobID=$jobSelect&amp;stateListings=liveness&amp;jobStatus=1\">Go Live</button>";
		}
		if ($jobStatus == 1)
		{
		echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid blue;\" formaction=\"/account/mylistings.php?jobID=$jobSelect&amp;stateListings=liveness&amp;jobStatus=0\">Take Offline</button>";

		echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid green;\" formaction=\"/account/mylistings.php?jobID=$jobSelect&amp;stateListings=liveness&amp;jobStatus=2\">Mark Completed</button>";
		}
		if ($jobStatus == 2)
		{
		echo "<button id=\"confirmation\" class=\"confirmation\" style=\"text-align: center; display: inline-block; width: 16%; border: 3px solid green;\" formaction=\"/account/mylistings.php?jobID=$jobSelect&amp;stateListings=liveness&amp;jobStatus=1\">Mark Incomplete</button>";
		}
	}
	
	
	

	
	echo "<span style=\"padding: 12px;\">&nbsp;</span></div>
	</form></div></div>";



}





///////###########################################################


if ($stateListings == "savechanges")
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
	
						
						
						
						
						
$countImages = "SELECT count(*) FROM user_gallery WHERE owner_id=:usrID AND job_id=:jobSelect";

$countImages = $dbfix->prepare($countImages);	
$countImages->execute([':usrID' => $usrID,':jobSelect' => $jobSelect]);
$countImages = $countImages->fetch(PDO::FETCH_COLUMN);

			



$grabImgFile = "SELECT * FROM user_gallery WHERE owner_id=:usrID AND job_id=:jobSelect";
$grabImgFile = $dbfix->prepare($grabImgFile);
$grabImgFile->execute([':usrID' => $usrID,':jobSelect' => $jobSelect]);
$picMeats = $grabImgFile->fetchALL(PDO::FETCH_ASSOC);

foreach($picMeats as $picMeat)
{

$dbFilename = $picMeat["file"];
$dbFileID = $picMeat["id"];



$isThis = preg_match("/$dbFilename/i", $listingPhotos);

	if ($isThis != 1 && $listingText != "")
	{
		$stmt = $dbfix->prepare("DELETE FROM user_gallery WHERE id=:dbFileID");
		$stmt->bindParam(':dbFileID', $dbFileID);
		$stmt->execute();
		
		
		$orP = "/home/shed/var/www/html/photostore/$dbFilename";
		if (file_exists($orP))
		{
		@unlink($orP);
		}
	}
}				

		
////////////// IMAGES DONE
////////////// NOW DO EMAIL



	
	
				
			
if (filter_var($emailAddress, FILTER_VALIDATE_EMAIL))
{
	if ($emailAddress != $userEmail)
	{ /// user email verified on account

		$countEmailOther = "SELECT count(*) FROM user_accounts WHERE id!=:usrID AND account_email=:userEmail";

		$countEmailOther = $dbfix->prepare($countEmailOther);	
		$countEmailOther->execute([':usrID' => $usrID,':userEmail' => $emailAddress,]);
		$countEmailOther = $countEmailOther->fetch(PDO::FETCH_COLUMN);

		if ($countEmailOther < 1)
		{
		
			
			
			
			$updateEmail = "UPDATE user_accounts SET
			account_email=:emailAddress WHERE id=:usrID";
			$stmt= $dbfix->prepare($updateEmail);			
			$data = [':emailAddress' => $emailAddress,':usrID' => $usrID];
			$stmt->execute($data);
			
			
			
		}
		else
		{
		// no go
		$msg = urlencode("This email address appears to be associated with another user. ");
		}
	}
	else
	{
		// already same account, do nothing
	}
}
else
{	// bad email
	$msg = urlencode("The email address appears to be invalid.");
}



////////////// PHONE NUMBER & MONEY
//
//
//



	if (is_numeric(preg_replace("/[^0-9]/", "", "$phoneNumber")))
	{
	$dbPhone = preg_replace("/[^0-9]/", "", "$phoneNumber");
	
	$updatePhone = "UPDATE user_accounts SET aphone_one=:dbPhone WHERE id=:usrID";
	$updatePhone= $dbfix->prepare($updatePhone);			
	$data = [':dbPhone' => $dbPhone,':usrID' => $usrID];
	$updatePhone->execute($data);
	
	}


	if (is_numeric(preg_replace("/[^0-9]/", "", "$guidePrice")))
	{
	$dbPrice = preg_replace("/[^0-9]/", "", "$guidePrice");

	$updatePrice = "UPDATE user_jobs SET job_bounty=:dbPrice WHERE job_owner=:usrID AND id=:jobSelect";
	$updatePrice= $dbfix->prepare($updatePrice);			
	$data = [':dbPrice' => $dbPrice,':usrID' => $usrID,':jobSelect' => $jobSelect];
	$updatePrice->execute($data);
	
	}


	if (strlen($listingTitle) >= 9)
	{
	$updateTitle = "UPDATE user_jobs SET job_title=:listingTitle WHERE job_owner=:usrID AND id=:jobSelect";
	$updateTitle= $dbfix->prepare($updateTitle);			
	$data = [':listingTitle' => $listingTitle,':usrID' => $usrID,':jobSelect' => $jobSelect];
	$updateTitle->execute($data);
	}


	
	if (strlen($listingText) >= 9)
	{
	$updateText = "UPDATE user_jobs SET job_description=:listingText WHERE job_owner=:usrID AND id=:jobSelect";
	$updateText= $dbfix->prepare($updateText);			
	$data = [':listingText' => $listingText,':usrID' => $usrID,':jobSelect' => $jobSelect];
	$updateText->execute($data);
	}


	if ($jobDeadlineDate != "")
	{

	$updateDeadline = "UPDATE user_jobs SET job_deadline=:jobDeadlineDate WHERE job_owner=:usrID AND id=:jobSelect";
	$updateDeadline= $dbfix->prepare($updateDeadline);			
	$data = [':jobDeadlineDate' => $jobDeadlineDate,':usrID' => $usrID,':jobSelect' => $jobSelect];
	$updateDeadline->execute($data);

	}


	if (strip_tags(strlen($cityAddress) >= 3))
	{
	$updateCity = "UPDATE user_accounts SET acity=:cityAddress WHERE id=:usrID";
	$updateCity= $dbfix->prepare($updateCity);			
	$data = [':cityAddress' => $cityAddress,':usrID' => $usrID];
	$updateCity->execute($data);
	}
	
	if (strip_tags(strlen($postcodeAddress) >= 3))
	{
	$updatePostcode = "UPDATE user_accounts SET apostcode=:postcodeAddress WHERE id=:usrID";
	$updatePostcode= $dbfix->prepare($updatePostcode);			
	$data = [':postcodeAddress' => $postcodeAddress,':usrID' => $usrID];
	$updatePostcode->execute($data);
	}
	
	
	
	$msg = urlencode("Fix Request updated. ");	
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;
	}















if ($stateListings == "delist")
{
	if ($jobSelect != "")
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
	
			$grabImgFile = "SELECT * FROM user_gallery WHERE owner_id=:usrID AND job_id=:jobSelect";
			$grabImgFile = $dbfix->prepare($grabImgFile);
			$grabImgFile->execute([':usrID' => $usrID,':jobSelect' => $jobSelect]);
			$picMeats = $grabImgFile->fetchALL(PDO::FETCH_ASSOC);

			foreach($picMeats as $picMeat)
			{

			$dbFilename = $picMeat["file"];
			$dbFileID = $picMeat["id"];


			$stmt = $dbfix->prepare("DELETE FROM user_gallery WHERE id=:dbFileID");
			$stmt->bindParam(':dbFileID', $dbFileID);
			$stmt->execute();
						
			$orP = "/home/shed/var/www/html/photostore/$dbFilename";
			if (file_exists($orP))
			{
			@unlink($orP);
			}			
			}
	
			$stmt = $dbfix->prepare("DELETE FROM user_jobs WHERE id=:jobSelect AND job_owner=:usrID");
			$stmt->execute([':jobSelect' => $jobSelect,':usrID' => $usrID,]);
	
	$msg = urlencode("Fix Request Deleted.");	
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;
	}
	else
	{
	$msg = urlencode("Fix Request Potentially Deleted.");	
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;	
	}

}


















if ($stateListings == "liveness")
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
	
	$updateListingStatus = "UPDATE user_jobs SET job_status=:jobStatus WHERE job_owner=:usrID AND id=:jobSelect";
	$updateListingStatus= $dbfix->prepare($updateListingStatus);			
	$data = [':jobStatus' => $jobStatus,':usrID' => $usrID,':jobSelect' => $jobSelect];
	$updateListingStatus->execute($data);


	$msg = urlencode("Fix Request Updated.");	
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;	


}
















///////###########################################################


if ($stateListings == "newlisting")
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
			
		


	$qu = "SELECT count(*) FROM user_jobs WHERE job_owner=:job_owner";

	$do = $dbfix->prepare($qu);	
	$do->execute([':job_owner' => $usrID]);
	$listingCount = $do->fetch(PDO::FETCH_COLUMN);
	if ($listingCount < 11)
	{



		
	$countEmailOther = "SELECT count(*) FROM user_accounts WHERE id!=:usrID AND account_email=:userEmail";

	$countEmailOther = $dbfix->prepare($countEmailOther);	
	$countEmailOther->execute([':usrID' => $usrID,':userEmail' => $emailAddress,]);
	$countEmailOther = $countEmailOther->fetch(PDO::FETCH_COLUMN);	
	
	$condition = 0;



	if (filter_var($emailAddress, FILTER_VALIDATE_EMAIL) && $countEmailOther < 1)
	{ /// user email verified on account

	$updateEmail = "UPDATE user_accounts SET
	account_email=:emailAddress WHERE id=:usrID";
	$stmt= $dbfix->prepare($updateEmail);			
	$data = [':emailAddress' => $emailAddress,':usrID' => $usrID];
	$stmt->execute($data);

	$condition++; //got
	}

	if (is_numeric(preg_replace("/[^0-9]/", "", "$phoneNumber")))
	{
	$dbPhone = preg_replace("/[^0-9]/", "", "$phoneNumber");
	
	$updatePhone = "UPDATE user_accounts SET aphone_one=:dbPhone WHERE id=:usrID";
	$updatePhone= $dbfix->prepare($updatePhone);			
	$data = [':dbPhone' => $dbPhone,':usrID' => $usrID];
	$updatePhone->execute($data);
	$condition++; //got
	}


	if (is_numeric(preg_replace("/[^0-9]/", "", "$guidePrice")))
	{
	$dbPrice = @preg_replace("/[^0-9]/", "", "$guidePrice");	
	$condition++; //got
	}


	if (strlen($listingTitle) >= 9)
	{
	$condition++; //got
	}

	if (strlen($listingText) >= 9)
	{
	$condition++; //got
	}


	if ($jobDeadlineDate != "")
	{
	$condition++; //got
	}

	if (strip_tags(strlen($cityAddress) >= 3))
	{
	$updateCity = "UPDATE user_accounts SET acity=:cityAddress WHERE id=:usrID";
	$updateCity= $dbfix->prepare($updateCity);			
	$data = [':cityAddress' => $cityAddress,':usrID' => $usrID];
	$updateCity->execute($data);
	
	$condition++; //got
	}
	
	if (strip_tags(strlen($postcodeAddress) >= 3))
	{
	$updatePostcode = "UPDATE user_accounts SET apostcode=:postcodeAddress WHERE id=:usrID";
	$updatePostcode= $dbfix->prepare($updatePostcode);			
	$data = [':postcodeAddress' => $postcodeAddress,':usrID' => $usrID];
	$updatePostcode->execute($data);
	
	$condition++; //got
	}

	if ($condition > 7)
	{
	$updateCity = "UPDATE user_accounts SET acity=:cityAddress WHERE id=:usrID";
	$updateCity= $dbfix->prepare($updateCity);			
	$data = [':cityAddress' => $cityAddress,':usrID' => $usrID];
	$updateCity->execute($data);
	
	
	$updatePostcode = "UPDATE user_accounts SET apostcode=:postcodeAddress WHERE id=:usrID";
	$updatePostcode= $dbfix->prepare($updatePostcode);			
	$data = [':postcodeAddress' => $postcodeAddress,':usrID' => $usrID];
	$updatePostcode->execute($data);
	
		
	$statement = $dbfix->prepare('INSERT INTO user_jobs (job_title, job_description, job_owner, job_deadline, job_bounty) VALUES (?, ?, ?, ?, ?)');
	$statement->execute([$listingTitle, $listingText, $usrID, $jobDeadlineDate, $dbPrice]);
	$msg = urlencode("Fix Request created! Click on it from the list below to add some photos.");	
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;
	}
	else
	{	
	$msg = urlencode("Some information is missing. You must complete all fields.");	
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;
	}
	}
	else
	{
	$msg = urlencode("Sorry, you already have the maximum 10 fix requests, please delete one and try again.");
	$outGo = "/myaccount.php?msg=$msg&activity=listings";
	header("Location: $outGo");
	exit;		
	}
}









?>
