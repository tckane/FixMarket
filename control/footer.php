<?php


///////////////////////////////////////////////////////
///
/// Fixmarket v0.000005
///
/// This file: control/footer.php
///
///		Contents: 		
///		File inclusion: control/controlbox.php // Vars, db connection, site settings
///		HTML from closing </DIV> to closing </html>
///
///////////////////////////////////////////////////////



////////////////// FOOTER
//
//

include("./control/controlbox.php");









if ($siteTheme == 1)
{
$themeLink = "<a href=\"./do/dotheme.php?seltheme=2\">Switch to Dark Mode</a><br/>";
}
else
{
$themeLink = "<a href=\"./do/dotheme.php?seltheme=1\">Switch to Light Mode</a><br/>";
}



$gmyear = gmdate("Y");


echo "</div><div class=\"footer\">$themeLink&copy; $siteAdministrator $gmyear<br/>$siteEmail</div>


<script src=\"/dist/myFootJS.js\"></script>
</body></html>";




//
//
////////////////// FOOTER ENDS

?>