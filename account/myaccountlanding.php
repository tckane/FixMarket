<?php



///////////////////////////////////////////////////////
///
/// PROFILE PAGE
///
///////////////////////////////////////////////////////






if (isset($_GET["stateAccount"])) 
{
$stateAccount = $_GET["stateAccount"];
}
elseif (isset($_POST["stateAccount"])) 
{
$stateAccount = $_POST["stateAccount"];
}
else
{
$stateAccount = 1;
}


if ($stateAccount == 1)
{


if ($UserloggedIn)
{
		
	$accEmail = $usrDetails["account_email"];

	echo "<div class=\"myaaccountlanding\">
	<div class=\"jobheader\">My Account Landing page</div>
	<div class=\"mainbody\">&lt; Getting Started Blurb&gt;<br/><br/></div>
	
	
	
	
	
	
	</div>";

}
else
	
{

	// new user shouldn't be here but we'll do something with this space in the future. it's on the laterbase for now :P

}
}



?>