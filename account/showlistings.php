<?php

///////////////////////////////////////////////////////
///
/// 
///
///////////////////////////////////////////////////////






// function to geocode address, it will return false if unable to geocode address
function geocode($address){

	// url encode the address
	$address = urlencode($address);
	
	// google map geocode api url
	$url = "https://maps.googleapis.com/maps/api/geocode/json?address={$address}&key=###KEY###&sensor=true";

	// get the json response
	$resp_json = file_get_contents($url);
	
	// decode the json
	$resp = json_decode($resp_json, true);

	// response status will be 'OK', if able to geocode given address 
	if($resp['status']=='OK'){

		// get the important data
		$lati = isset($resp['results'][0]['geometry']['location']['lat']) ? $resp['results'][0]['geometry']['location']['lat'] : "";
		$longi = isset($resp['results'][0]['geometry']['location']['lng']) ? $resp['results'][0]['geometry']['location']['lng'] : "";
		$formatted_address = isset($resp['results'][0]['formatted_address']) ? $resp['results'][0]['formatted_address'] : "";
		
		// verify if data is complete
		if($lati && $longi && $formatted_address){
		
			// put the data in the array
			$data_arr = array();			
			
			array_push(
				$data_arr, 
					$lati, 
					$longi, 
					$formatted_address
				);
			
			return $data_arr;
			
		}else{
			return false;
		}
		
	}

	else{
		echo "<strong>ERROR: {$resp['status']}</strong>";
		return false;
	}
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


$orderBy = "";




if (isset($_GET["stateMarket"])) 
{
$stateMarket = $_GET["stateMarket"];
}
elseif (isset($_POST["stateMarket"])) 
{
$stateMarket = $_POST["stateMarket"];
}
else
{
$stateMarket = 1;
}







if (isset($_GET["listingSelect"])) 
{
$listingSelect = $_GET["listingSelect"];
}
elseif (isset($_POST["listingSelect"])) 
{
$listingSelect = $_POST["listingSelect"];
}
else
{
$listingSelect = 0;
}


if (isset($_GET["adSelect"])) 
{
$adSelect = $_GET["adSelect"];
}
elseif (isset($_POST["adSelect"])) 
{
$adSelect = $_POST["adSelect"];
}
else
{
$adSelect = 0;
}















// listing limit
$limit = 1; 

$record_index = ($page-1) * $limit;   



if ($stateMarket == 1)
{



$qu = "SELECT count(*) FROM user_jobs WHERE job_owner!=:usrID AND job_status=1";

$do = $dbfix->prepare($qu);	
$do->execute([':usrID' => $usrID]);
$listingCount = $do->fetch(PDO::FETCH_COLUMN);

	
	echo "<div class=\"accentmarket\">- Fix Market -</div>
	<div class=\"subaccentmarket\">- Fix Requests -</div>
	
	<div class=\"marketjoblist\">";




	// add WHERE job_owner!=:usrID AND here!
	
	$dbSelQu = "SELECT * FROM user_jobs WHERE job_status=1 ORDER BY date_created DESC";
	$dbSel = $dbfix->prepare($dbSelQu);
	$dbSel->execute([':usrID' => $usrID]);
	$listMeat = $dbSel->fetchALL(PDO::FETCH_ASSOC);

	foreach($listMeat as $listMeats)
	{
		
			$listing = $listMeats["id"];
			$listingTitle = $listMeats["job_title"];
			$listingOwner = $listMeats["job_owner"];
			$listingPosted = $listMeats["date_created"];		
			$listingDeadline = $listMeats["job_deadline"];			
		//	if ($listingOwner == "") $listingOwner = 0;			
            if ($listing == $listingSelect) $outline = " -webkit-box-shadow: inset 0 0 100px #000;
    -moz-box-shadow: inset 0 0 100px #000;
    box-shadow: inset 0 0 100px #000;";
            else $outline = "";
		
		
		
						
			$listingPosted = date('M jS, g:ia',strtotime($listingPosted)); 
			$listingDeadline = date('M jS, g:ia',strtotime($listingDeadline));


			if (strlen($listingTitle) > 19)
			{
				$listingTitle = substr("$listingTitle", 0, 19);
				$listingTitle = "$listingTitle...";
			}
			else
			{
			$listingTitle = $listingTitle;
			}	

			$dbSelO = "SELECT * FROM user_accounts WHERE id=:listingOwner";
			$dbSelO = $dbfix->prepare($dbSelO);
			$dbSelO->execute([':listingOwner' => $listingOwner]);
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




					
			echo "<a href=\"/index.php?activity=market&amp;stateMarket=1&amp;listingSelect=$listing&amp;adSelect=$adSelect\" class=\"marketjoblistlink\" style=\"float:left; font-size: 26px;$outline\">
			$listingTitle<br/><span style=\"font-size: 18px;\"/>Posted By: $saluTationHere<br/>
			Posted: $listingPosted<br/>Deadline: $listingDeadline</a>";
	}
echo "</div>";

	
	
	$dbGetJobDetails = "SELECT * FROM user_jobs WHERE id=:listingSelect";
	$dbGetJobDetails = $dbfix->prepare($dbGetJobDetails);
	$dbGetJobDetails->execute([':listingSelect' => $listingSelect]);
	$listingMeat = $dbGetJobDetails->fetch(PDO::FETCH_ASSOC);
	$listingTitle = $listingMeat["job_title"];
    $listingOwner = $listingMeat["job_owner"];
	$listingBody = $listingMeat["job_description"];	
	$jobDeadline = $listingMeat["job_deadline"];	
	$jobBounty = $listingMeat["job_bounty"];		
	$jobDeadline = date('M jS, Y',strtotime($jobDeadline)); 
	
	
	
	$dbSelQu = "SELECT * FROM user_accounts WHERE id=:listingSelect";
	$dbSel = $dbfix->prepare($dbSelQu);
	$dbSel->execute([':listingSelect' => $listingOwner]);
	$marketMeat = $dbSel->fetch(PDO::FETCH_ASSOC);
	$listingUsername = $marketMeat["monicker"];	
	$listingUserEmail = $marketMeat["account_email"];
    $listingPostcode = $marketMeat["apostcode"];
	
	

	if ($listingUsername == "") $saluTationListing = strstr($listingUserEmail, '@', true);
	else $saluTationListing = $listingUsername;
	
	
    $dbSelPic = "SELECT * FROM user_gallery WHERE job_id=:listingSelect ORDER BY id ASC LIMIT 1";
	$dbSel = $dbfix->prepare($dbSelPic);
	$dbSel->execute([':listingSelect' => $listingSelect]);
	$marketPics = $dbSel->fetch(PDO::FETCH_ASSOC);
	$listingPic = $marketPics["file"];	
	
	

	
	
	if (strlen($listingTitle) > 29)
	{
	$listingTitle = substr("$listingTitle", 0, 29);
	$listingTitle = "$listingTitle...";
	}	
	


echo "<div class=\"marketjobpanel\">";

if ($listingSelect < 1)
{
	echo "Click on a listing to view it here.";
}
else
{
	echo "<div class=\"marketjobpanelheader\">$listingTitle</div>";
	
	if ($listingBody != "")
	{
	echo "<div class=\"marketpanelbody\">$listingBody</div>";
	}
	else
	{
    echo "<div class=\"marketpanelbody\">Listing Body Empty.</div>";
	}
	
	echo "<table class=\"marketpaneldetails\" style=\"width: 100%;\">
    <tr>
	<td style=\"width: 120px; font-weight: bold;\">Guide Price:</td><td style=\"font-weight: bold; color: $siteLink;\">&#163;$jobBounty</td>
	</tr>
	<tr>
	<td style=\"width: 120px; font-weight: bold;\">Deadline:</td><td>$jobDeadline</td>
	</tr>
    <tr>
	<td style=\"width: 120px; font-weight: bold;\">Job Owner:</td><td>$saluTationListing</td>
	</tr>
	</table>";
	
	
	
	if ($listingPic != "")
	{
	echo "<table>
    <tr>
	<td><img src=\"/photostore/index.php?imgFile=$listingPic\"/></td>
	</tr>
	</tr>
	</table>";
	}
	
	echo "</div>";
	
	
	
	
	
	
	
	
		echo "<div style=\"position: fixed; left: 90px; top: 400px; background: #ffff00;\">";
	
	

	// get latitude, longitude and formatted address
	$data_arr = geocode($listingPostcode);

	// if able to geocode the address
	if($data_arr){
		
		$latitude = $data_arr[0];
		$longitude = $data_arr[1];
		$formatted_address = $data_arr[2];
					
	?>

	<!-- google map will be shown here -->
	<div id="gmap_canvas">Loading map...</div>
	<div id='map-label'>Map shows approximate location.</div>

	<!-- JavaScript to show google map -->
	<script type="text/javascript" src="https://maps.google.com/maps/api/js?key=AIzaSyC5_vh8kkslz5DD8Q2qU6dzlWdZecL7TGk"></script>   
	<script type="text/javascript">
		function init_map() {
			var myOptions = {
				zoom: 14,
				center: new google.maps.LatLng(<?php echo $latitude; ?>, <?php echo $longitude; ?>),
				mapTypeId: google.maps.MapTypeId.ROADMAP
			};
			map = new google.maps.Map(document.getElementById("gmap_canvas"), myOptions);
			marker = new google.maps.Marker({
				map: map,
				position: new google.maps.LatLng(<?php echo $latitude; ?>, <?php echo $longitude; ?>)
			});
			infowindow = new google.maps.InfoWindow({
				content: "<?php echo $formatted_address; ?>"
			});
			google.maps.event.addListener(marker, "click", function () {
				infowindow.open(map, marker);
			});
			infowindow.open(map, marker);
		}
		google.maps.event.addDomListener(window, 'load', init_map);
	</script>

	<?php

	// if unable to geocode the address
	}else{
		echo "No map found.";
	}


	echo "</div>";


	
	
	
	
	
	

	
	
	
	
	
}
	
	
	
	
	
	
	



}





?>
