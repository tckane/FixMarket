<?php


///////////////////////////////////////////////////////
///
/// Fixmarket v0.000005
///
/// This file: control/css.php
///
///		Contents: 		
///		Cascading Style Sheets
///		
///////////////////////////////////////////////////////



////////////////// CSS
//
//

include("./control/controlbox.php");


echo "<style>


nav {

	float: left;
	padding: 20px;	

}

#menu-icon {

	display: hidden;
	width: 40px;
	height: 40px;
	background: #4C8FEC url(/assets/images/actual/mobile-menu.png) center;

}

a:hover#menu-icon {

	background-color: #444;
	border-radius: 4px 4px 0 0;

}

ul {

	list-style: none;


}

li {
	display: inline-block;
	float: left;
	padding: 0px
}

.mobmenulink {
	float: left;
	background-color: $siteNavCol;
	color: $siteLink;
	border-style: none;
	outline: none !important;
	padding: 10px;
	width: 90%;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-weight:bold;
 	box-shadow: 1px 1px 4px $siteLink;
	-moz-box-shadow: 1px 1px 4px $siteLink;
	-webkit-box-shadow: 1px 1px 4px $siteLink;
	-webkit-border-top-left-radius:3px;
	-moz-border-radius-topleft:3px;
	border-top-left-radius:3px;
	-webkit-border-top-right-radius:3px;
	-moz-border-radius-topright:3px;
	border-top-right-radius:3px;
	-webkit-border-bottom-right-radius:3px;
	-moz-border-radius-bottomright:3px;
	border-bottom-right-radius:3px;
	-webkit-border-bottom-left-radius:3px;
	-moz-border-radius-bottomleft:3px;
	border-bottom-left-radius:3px;
	
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, $siteNavCol) );
	background:-moz-linear-gradient( center top, #e9e9e9 5%, $siteSidelinkCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='$siteNavCol');
	background-color:#e9e9e9;
	

}


@viewport {
  width: device-width ;
  zoom: 1.0 ;
} 


@font-face {
  font-family: mainText;
  src: url('./assets/fonts/Asap.ttf');
}

.hide-robot{
display:none;
}
		
.clearfix::after {
  content: \"\";
  clear: both;
  display: table;
}



a:link, a:visited {
  color: $siteLink;
  text-decoration: none;
  display: inline-block;
}

a:hover {
  color: $siteAccentCol;
}


a.nav:link, a.nav:visited {
  background-color: $siteNavCol;
  color: $siteLink;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-weight:bold;
 	box-shadow: 1px 1px 4px $siteLink;
	-moz-box-shadow: 1px 1px 4px $siteLink;
	-webkit-box-shadow: 1px 1px 4px $siteLink;
	-webkit-border-top-left-radius:3px;
	-moz-border-radius-topleft:3px;
	border-top-left-radius:3px;
	-webkit-border-top-right-radius:3px;
	-moz-border-radius-topright:3px;
	border-top-right-radius:3px;
	-webkit-border-bottom-right-radius:3px;
	-moz-border-radius-bottomright:3px;
	border-bottom-right-radius:3px;
	-webkit-border-bottom-left-radius:3px;
	-moz-border-radius-bottomleft:3px;
	border-bottom-left-radius:3px;
	
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, $siteNavCol) );
	background:-moz-linear-gradient( center top, #e9e9e9 5%, $siteSidelinkCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='$siteNavCol');
	background-color:#e9e9e9;
	
	
	
}

a.nav:hover {
  background-color: $siteHlink;
  	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, $siteSidelinkCol) );
	background:-moz-linear-gradient( center top, #e9e9e9 5%, $siteSidelinkCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='$siteSidelinkCol');

}
a:active {
color: $siteAlink;
}

body {
font-size: 24px;
font-family: mainText;
background-image: url('./assets/images/actual/bg.png');
background-color: $siteBgCol;
color: $siteTextCol;


}

html {
}

.center {
  display: block;

}

div.layout {
	width:100%;
	background-color:$siteDivCol;
	color: $siteBgCol;
  overflow-y: scroll;
}




.mainwindow {
	padding-top: 6px;
	background-color:$siteDivCol;
	color: $siteBgCol;
	
}


div.footer {
	text-align: center;
	width:100%;
	background-color:$siteNavCol;
	color: $siteBgCol;
}




div.accent {
	text-align: left;
	padding: 8px;
	font-size: 20px;
	width: auto;
	overflow-x: hidden;
	font-weight: bold;
	background-color:$siteAccentCol;
	color: $siteBgCol;
	box-shadow: 1px 1px 4px $siteLink;
	-moz-box-shadow: 1px 1px 4px $siteLink;
	-webkit-box-shadow: 1px 1px 4px $siteLink;
}

div.sidemenu {
	text-align: center;
	padding-top: 22px;
	font-size: 20px;
	width: auto;
	float: left;
	font-weight: bold;
	background-color:$siteAccentCol;
	color: $siteBgCol;
	width: 220px; 
	height: 100%; 
	background-color: $siteSidemenuCol;
	box-shadow: 1px 1px 4px $siteLink;
	-moz-box-shadow: 1px 1px 4px $siteLink;
	-webkit-box-shadow: 1px 1px 4px $siteLink;
}

.sides {
 	box-shadow: 1px 1px 3px $siteLink;
	-moz-box-shadow: 1px 1px 3px $siteLink;
	-webkit-box-shadow: 1px 1px 3px $siteLink;
	-webkit-border-top-left-radius:3px;
	-moz-border-radius-topleft:3px;
	border-top-left-radius:3px;
	-webkit-border-top-right-radius:3px;
	-moz-border-radius-topright:3px;
	border-top-right-radius:3px;
	-webkit-border-bottom-right-radius:3px;
	-moz-border-radius-bottomright:3px;
	border-bottom-right-radius:3px;
	-webkit-border-bottom-left-radius:3px;
	-moz-border-radius-bottomleft:3px;
	border-bottom-left-radius:3px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, $siteNavCol) );
	background:-moz-linear-gradient( center top, #e9e9e9 5%, $siteSidelinkCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='$siteNavCol');
	
	background-color: $siteNavCol;
	color: $siteLink;
	display:inline-block;	
	text-decoration:none;
	text-align:center;	
	font-size:20px;
	font-weight:bold;
	font-style:normal;
	width:180px;
	height:32px;
	line-height:32px;
}
.sides:hover {
  background-color: $siteHlink;
  	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, $siteSidelinkCol) );
	background:-moz-linear-gradient( center top, #e9e9e9 5%, $siteSidelinkCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='$siteSidelinkCol');
	background-color:#e9e9e9;
	color: $siteLink;
}.sides:active {
	position:relative;
	top:1px;
}





.listing {
 	box-shadow: 1px 1px 3px $siteLink;
	-moz-box-shadow: 1px 1px 3px $siteLink;
	-webkit-box-shadow: 1px 1px 3px $siteLink;
	-webkit-border-top-left-radius:3px;
	-moz-border-radius-topleft:3px;
	border-top-left-radius:3px;
	-webkit-border-top-right-radius:3px;
	-moz-border-radius-topright:3px;
	border-top-right-radius:3px;
	-webkit-border-bottom-right-radius:3px;
	-moz-border-radius-bottomright:3px;
	border-bottom-right-radius:3px;
	-webkit-border-bottom-left-radius:3px;
	-moz-border-radius-bottomleft:3px;
	border-bottom-left-radius:3px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, $siteListinglinkCol), color-stop(1, $siteNavCol) );
	background:-moz-linear-gradient( center top, $siteListinglinkCol 18%, $siteNavCol 77% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteListinglinkCol', endColorstr='$siteListinglinkCol');
	
	background-color: $siteNavCol;
	color: $siteSidelinkCol;
	display:inline-block;	
	font-weight:bold;
	text-decoration:none;
	font-size:26px;
	height:160px;
	width: 350px;
	padding: 4px;

}
.listing:hover {
  background-color: $siteHlink;
  	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #e9e9e9), color-stop(1, $siteSidelinkCol) );
	background:-moz-linear-gradient( center top, #e9e9e9 5%, $siteSidelinkCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e9e9e9', endColorstr='$siteSidelinkCol');
	background-color:$siteNavCol;
	color: $siteListinglinkCol;
}.sides:active {
	position:relative;
	top:1px;
}


div.nav {
text-align: center;
width: auto;
overflow-x: hidden;
background-color: $siteNavCol;
padding: 4px;
}

.formalign {
  display: block;
	margin: auto;
}

.form-style-profile{
	padding: 10px 12px 10px 20px;
	font-size: 16px;

}


.form-style-2{
	padding: 10px 12px 10px 20px;
	font-weight: bold;
	font-size: 20px;
	
}
.form-style-2-heading{
	font-weight: bold;
	text-align: center;
	border-bottom: 2px solid #ddd;
	font-size: 20px;
	padding-bottom: 3px;
}
.form-style-2 label{
	display: block;
}
.form-style-2 label > span{
	width: 100px;
	font-weight: bold;
	padding-top: 8px;
	padding-right: 5px;
}
.form-style-2 span.required{
	color:green;
}

.form-style-2 input.input-field, .form-style-2 .select-field{
	width: 100%;
	height: 40px;
}
.form-style-2 input.input-field, 
.form-style-2 .tel-number-field, 
.form-style-2 .textarea-field, 
 .form-style-2 .select-field{
	box-sizing: border-box;
	-webkit-box-sizing: border-box;
	-moz-box-sizing: border-box;
	border: 1px solid #C2C2C2;
	box-shadow: 1px 1px 2px $siteTextCol;
	-moz-box-shadow: 1px 1px 2px $siteTextCol;
	-webkit-box-shadow: 1px 1px 2px $siteTextCol;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
	padding: 7px;
	outline: none;
	color: $siteLink;
	background-color: $siteSidelinkCol;
}
.form-style-2 .input-field:focus, 
.form-style-2 .tel-number-field:focus, 
.form-style-2 .textarea-field:focus,  
.form-style-2 .select-field:focus{
	border: 1px solid #0C0;
	width: 100%;
	height: 40px;
}
.form-style-2 .textarea-field{
	height:100px;
	width: 55%;
}
.form-style-2 input[type=submit],
.form-style-2 input[type=button]{
	width: 100%;
	height: 40px;
	padding: 2px 8px 2px 8px;
	font-weight: bold;
	font-size: 20px;
	background: $siteNavCol;
	color: $siteLink;
	box-shadow: 1px 1px 4px #DADADA;
	-moz-box-shadow: 1px 1px 4px #DADADA;
	-webkit-box-shadow: 1px 1px 4px #DADADA;
	border-radius: 3px;
	-webkit-border-radius: 3px;
	-moz-border-radius: 3px;
}
.form-style-2 input[type=submit]:hover,
.form-style-2 input[type=button]:hover{
	background: $siteHlink;
	width: 100%;
	color: $siteLink;
	box-shadow: 1px 1px 4px $siteLink;
	-moz-box-shadow: 1px 1px 4px $siteLink;
	-webkit-box-shadow: 1px 1px 4px $siteLink;
}



























@media only screen and (max-width : 1240px) {

	header {
		position: absolute;
	border: none;
    outline: none;

	}

	#menu-icon {

		display:inline-block;

	}

	nav ul, nav:active ul { 

		display: none;
		position: absolute;
		padding: 10px;
		background: $siteNavCol;
		right: 0px;
		top: 0px;
		width: 50%;
		height: 100%;

	}

	nav li {

		text-align: center;
		width: 100%;
		padding: 10px 0;


	}

	nav:hover ul {

		display: block;

	}




</style>";

//
//
////////////////// CSS ENDS

?>