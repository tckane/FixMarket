<?php



///////////////////////////////////////////////////////
///
/// PROFILE PAGE
///
///////////////////////////////////////////////////////



if (isset($_GET["stateProfile"])) 
{
$stateProfile = $_GET["stateProfile"];
}
elseif (isset($_POST["stateProfile"])) 
{
$stateProfile = $_POST["stateProfile"];
}
else
{
$stateProfile = 1;
}


if ($stateProfile == 1)
{


if ($UserloggedIn)
{
		
	$profileNickname = $usrDetails["monicker"];
	$profileFirstName = $usrDetails["afirstname"];
	$profileLastName = $usrDetails["alastname"];	
	$profileAddressOne = $usrDetails["aaddress_one"];	
	$profileAddressTwo = $usrDetails["aaddress_two"];
	$profileCounty = $usrDetails["acounty"];
	$profileCity = $usrDetails["acity"];
	$aCountry = $usrDetails["acountry"];
	$profilePostcode = $usrDetails["apostcode"];
	$profilePhone = $usrDetails["aphone_one"];
	$profileDobDay = $usrDetails["dob_day"];
	$profileDobMonth = $usrDetails["dob_month"];
	$profileDobYear = $usrDetails["dob_year"];
	
	
	
		
echo "<div class=\"hidescrollbar\"><div class=\"myaaccountlanding\">

<div class=\"jobheader\">Edit Profile</div>
<div class=\"jobcontext\">* Indicates a required field.</div>
<div class=\"formalign\">
<form class=\"form-style-2\" action=\"/account/editprofile.php\" method=\"post\">	



<table>
<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Screen Name:</span></td>
<td><p id=\"profileNickname\" name=\"profileNickname\" class=\"profileEdit\">$profileNickname</p></td>
</tr>


<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">First Name:<span class=\"required\">*</span></span></td>
<td><p id=\"profileFirstName\" name=\"profileFirstName\" class=\"profileEdit\">$profileFirstName</p></td>
</tr>


<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Last Name:</span></td>
<td><p id=\"profileLastName\" name=\"profileLastName\" class=\"profileEdit\">$profileLastName</p></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Date Of Birth:</span><br/><span class=\"jobcontext\">Not Public.</span></td>
<td><input type=\"date\" class=\"lineEdit\" name=\"profileDob\" value=\"$profileDobDay $profileDobMonth $profileDobYear\"/></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Address Line One:</span><br/><span class=\"jobcontext\">Not Public.</span></td>
<td><p id=\"profileAddressOne\" name=\"profileAddressOne\" class=\"profileEdit\">$profileAddressOne</p></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Address Line 2:</span><br/><span class=\"jobcontext\">Not Public.</span></td>
<td><p id=\"profileAddressTwo\" name=\"profileAddressTwo\" class=\"profileEdit\">$profileAddressTwo</p></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">City:<span class=\"required\">*</span></span></td>
<td><p id=\"profileCity\" name=\"profileCity\" class=\"profileEdit\">$profileCity</p></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">County:</span></td>
<td><p id=\"profileCounty\" name=\"profileCounty\" class=\"profileEdit\">$profileCounty</p></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Country:</span></td>
<td><select name=\"aCountry\" class=\"lineEdit\">
<optgroup>
<option>Northern Ireland</option>
<option>Eire</option>
<option>Scotland</option>
<option>Wales</option>
<option>England</option>
</optgroup>
</select></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Post Code:</span><br/><span class=\"jobcontext\">Not Public.</span></td>
<td><p id=\"profilePostcode\" name=\"profilePostcode\" class=\"profileEdit\">$profilePostcode</p></td>
</tr>

<tr>
<td style=\"width: 220px;\"><span class=\"gensubtitle\">Phone:</span><br/><span class=\"jobcontext\">Not Public unless specified.</span></td>
<td><p id=\"profilePhone\" name=\"profilePhone\" class=\"profileEdit\">$profilePhone</p></td>
</tr>





</table>
<table>

<tr style=\"width: 666px;\">
<td style=\"text-align: center;\"><button class=\"bnormal\" type=\"submit\" style=\"text-align: center; width: 668px;\">Update Profile</button></td>
</tr>

</table>

<input name=\"stateProfile\" type=\"hidden\" id=\"stateProfile\" value=\"submit\"/>



<div style=\"padding-bottom: 25px;\"></div></form>
</div></div>";

}
else
	
{

	// new user shouldn't be here but we'll do something with this space in the future. it's on the laterbase for now :P

}

}

///////////////////////////////////////////////////



if ($stateProfile == "submit")
{





//ini_set('display_errors', 1);
//error_reporting(E_ALL);
	
include("../control/mydbcon.php");
	
if (isset($_POST["profileNickname"])) 
{
$profileNickname = strip_tags($_POST["profileNickname"]);
}
else
{
$profileNickname = "";
}

if (isset($_POST["profileFirstName"])) 
{
$profileFirstName = strip_tags($_POST["profileFirstName"]);
}
else
{
$profileFirstName = "";
}

if (isset($_POST["profileLastName"])) 
{
$profileLastName = strip_tags($_POST["profileLastName"]);
}
else
{
$profileLastName = "";
}

if (isset($_POST["profileAddressOne"])) 
{
$profileAddressOne = strip_tags($_POST["profileAddressOne"]);
}
else
{
$profileAddressOne = "";
}

if (isset($_POST["profileAddressTwo"])) 
{
$profileAddressTwo = strip_tags($_POST["profileAddressTwo"]);
}
else
{
$profileAddressTwo = "";
}

if (isset($_POST["profileCounty"])) 
{
$profileCounty = $_POST["profileCounty"];
}
else
{
$profileCounty = "";
}

if (isset($_POST["profileCity"])) 
{
$profileCity = strip_tags($_POST["profileCity"]);
}
else
{
$profileCity = "";
}
	
if (isset($_POST["aCountry"])) 
{
$aCountry = $_POST["aCountry"];
}
else
{
$aCountry = "";
}

if (isset($_POST["profilePostcode"])) 
{
$profilePostcode = strip_tags($_POST["profilePostcode"]);
}
else
{
$profilePostcode = "";
}

if (isset($_POST["profilePhone"])) 
{
$profilePhone = strip_tags($_POST["profilePhone"]);
}
else
{
$profilePhone = "";
}

if (isset($_POST["aPrefix"])) 
{
$aPrefix = strip_tags($_POST["aPrefix"]);
}
else
{
$aPrefix = "";
}

if (isset($_POST["profileDob"])) 
{
$profileDob = $_POST["profileDob"];
}
else
{
$profileDob = "";
}




$profileDob = explode('-', $profileDob);
$profileDobYear = $profileDob[0];
$profileDobMonth   = $profileDob[1];
$profileDobDay  = $profileDob[2];

if (is_numeric($profilePhone))
{

	if ($profileFirstName != "")
	{
		
		if ($profileCity != "")
		{
		
			if ($_COOKIE["Login"] != "")
			{
			$brCookie = $_COOKIE["Login"];
			}
			else
			{
			$brCookie = 0;
			}		
			$sql = "UPDATE user_accounts SET
			monicker=:monicker,
			afirstname=:afirstname,
			alastname=:alastname,
			aaddress_one=:aaddress_one,
			aaddress_two=:aaddress_two,
			aphone_prefix=:aphone_prefix,
			acounty=:profileCounty,
			acity=:acity,
			acountry=:acountry,
			apostcode=:apostcode,
			dob_day=:profileDobDay,
			dob_month=:profileDobMonth,
			dob_year=:profileDobYear,			
			aphone_one=:aphone_one WHERE login_cookie=:login_cookie";
			$stmt= $dbfix->prepare($sql);			
			$data = [
			':monicker' => $profileNickname,
			':afirstname' => $profileFirstName,
			':alastname' => $profileLastName,
			':aaddress_one' => $profileAddressOne,
			':aaddress_two' => $profileAddressTwo,
			':aphone_prefix' => $aPrefix,
			':profileCounty' => $profileCounty,
			':acity' => $profileCity,
			':acountry' => $aCountry,
			':apostcode' => $profilePostcode,
			':aphone_one' => $profilePhone,
			':profileDobDay' => $profileDobDay,	
			':profileDobMonth' => $profileDobMonth,	
			':profileDobYear' => $profileDobYear,				
			':login_cookie' => $brCookie
			];
			$stmt->execute($data);
		
			$outMsg = urlencode("Your profile was updated.");
			$outGo = "/myaccount.php?msg=$outMsg&activity=profile";
			header("Location: $outGo");
			exit;
			}
		else
		{
		$outMsg = urlencode("Please specify your City.");
		$outGo = "/myaccount.php?msg=$outMsg&activity=profile";
		header("Location: $outGo");	
			exit;
		}
		
	}
	else
	{
	$outMsg = urlencode("Please enter a First Name.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=profile";
	header("Location: $outGo");
	exit;
	}
}
else
	{

		
		
	$outMsg = urlencode("The phone number you supplied is incorrect.");
	$outGo = "/myaccount.php?msg=$outMsg&activity=profile";
	header("Location: $outGo");
	exit;
	}


}









?>
