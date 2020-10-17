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


// NEWCOLORS



$newColTableBG = "#FFFFED";



////////////////// CSS
//
//

include("./control/controlbox.php");




echo "<style>





@font-face {
font-family: maintext;

src: url('./assets/fonts/OpenSans-Regular.ttf');

}

@font-face {
font-family: heading;

src: url('./assets/fonts/Archivo-Medium.ttf');

}

@font-face {
font-family: listingtext;

src: url('./assets/fonts/IBMPlexSerif-Regular.ttf');

}




.hide-robot{
display:none;
}
		
.clearfix::after {
  content: \"\";
  clear: both;
  display: table;
}


.header {

    position: fixed;
    width: 100vw;
	height: 80px;
    top: 0px;
	left: 0px;
	background-color: $siteBgCol;
	z-index: 999;
	overflow: hidden;
    border-bottom: 3px solid $siteTextCol;
}


div.footer {

    position: fixed;
    width: 99%;
	font-size: 16px;
	height: 70px;
	background-color: $siteBgCol;
	z-index: 999;
	bottom: 0px;
	vertical-align: baseline;
	text-align:center;
	overflow: hidden;
}





a:link, a:visited {
  color: $siteLink;
  text-decoration: none;
  display: inline-block;
}

a:hover {
	color: $siteSidelinkCol;
	transform: scale(1.1);
	font-weight: bold;
	font-size: 16px;
}


a.nav:link, a.nav:visited {
	background-color:$siteBgCol;
	color: $siteLink;
	padding: 5px;
	font-size: 18px;
	text-shadow: 0px 1px 2px #aaa;
	text-align: left;
	margin: 1px;
	
}

a.nav:hover {
  background-color: $siteBgCol;
	color: $siteSidelinkCol;
	transform: scale(1.1);
	font-weight: bold;

}
a:active {
color: $siteAlink;
}



body {
padding-top: 80px;
font-size: 14px;
font-family: maintext;
background-color: $siteBgCol;
color: $siteTextCol;
overflow: hidden;
text-shadow: 0px 1px 1px #aaa;
text-rendering: optimizeLegibility !important;
-webkit-font-smoothing: antialiased !important;
}

.mainbody {
font-size: 18px;
line-height: 18px;
padding: 5px;
}


.center {
  display: block;

}

div.layout {
height:100%;
width:100%;
z-index: 900;
position: fixed;
color: $siteTextCol;
overflow: hidden;	
}


.mainwindow {
	position: relative;


}


div.accent {
	margin-bottom: 2px;
	text-align: left;
	padding-bottom: 5px;
	font-size: 24px;
	left: 0px;
	position: relative;
	text-shadow: 0px 1px 2px #aaa;
	width: 99%;
	font-weight: bold;
	color: $siteAccentCol;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	z-index: 888;
	background: $siteTextCol;
	
}





select.dateofdeadline {
	 	
	text-shadow: none;
	border-radius: 1px;
	-webkit-border-radius: 1px;
	-moz-border-radius: 1px;
	font-size: 20px;	
	padding: 4px;	
	color: $siteTextCol;	
	font-weight: bold;	
	width: 440px;
	font-family: listingtext;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );


}







.sides {
	background-color:$siteBgCol;
	color: $siteLink;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.8, $siteNavCol), color-stop(0.5, $siteBgCol) );
	background:-moz-linear-gradient( center top, $siteNavCol 5%, $siteBgCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteNavCol', endColorstr='$siteBgCol');
	z-index: 3;
	display: inline-block;	
	font-family: maintext;
	font-weight: bold;
	margin-top: 5px;
	margin-bottom: 5px;
	text-decoration:none;
	padding: 5px;
	text-align:center;	
	font-size:20px;
	width:180px;
	height:32px;
	
}



.sides:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteSidemenuCol), color-stop(0.9, $siteAccentCol) );
	background:-moz-linear-gradient( center top, $siteSidemenuCol 5%, $siteAccentCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteSidemenuCol', endColorstr='$siteAccentCol');
	color: $siteSidelinkCol;
	transform: scale(1.2);
	font-size:20px;
	font-weight:bold;
	
	
}


div.sidemenu {
	text-align: center;
	font-size: 20px;
	color: $siteAccentCol;
	width: 200px; 
    border-bottom: 3px solid $siteTextCol;
	height: 713px;
	z-index: 999;
	position: fixed;
  background: linear-gradient(to bottom, 
      $siteTripleOne 5%, 
      $siteTripleTwo 5%, 
      $siteTripleTwo 10%, 
      $siteTripleThree 10%, 
      $siteTripleThree 15%, 
      $siteTripleTwo 15%, 
      $siteTripleTwo 20%, 
      $siteTripleOne 20%,
      $siteTripleOne 25%,
      $siteTripleTwo 25%, 
      $siteTripleTwo 30%, 
      $siteTripleThree 30%, 
      $siteTripleThree 35%, 
      $siteTripleTwo 35%, 
      $siteTripleTwo 40%, 
      $siteTripleOne 40%,
      $siteTripleOne 45%,
	  $siteTripleThree 45%, 
      $siteTripleThree 50%, 
      $siteTripleTwo 50%, 
      $siteTripleTwo 55%, 
      $siteTripleOne 55%,
      $siteTripleOne 60%,
      $siteTripleTwo 60%, 
      $siteTripleTwo 65%, 
      $siteTripleThree 65%, 
      $siteTripleThree 70%, 
      $siteTripleTwo 70%, 
      $siteTripleTwo 75%, 
      $siteTripleOne 75%,
      $siteTripleOne 80%,
	  $siteTripleTwo 80%, 
      $siteTripleTwo 85%, 
      $siteTripleThree 85%, 
      $siteTripleThree 90%, 
      $siteTripleTwo 90%, 
      $siteTripleTwo 95%, 
      $siteTripleThree 95%
	);
}


.jobmenu {
	text-align: center;
	font-size: 20px;
	color: $siteAccentCol;
	width: 260px; 
	height: 713px;
	left: 200px;
	padding-left: 12px;
    border-bottom: 3px solid $siteTextCol;
	position: relative;
  background: linear-gradient(to bottom, 
      $siteTripleOne 5%, 
      $siteTripleTwo 5%, 
      $siteTripleTwo 10%, 
      $siteTripleThree 10%, 
      $siteTripleThree 15%, 
      $siteTripleTwo 15%, 
      $siteTripleTwo 20%, 
      $siteTripleOne 20%,
      $siteTripleOne 25%,
      $siteTripleTwo 25%, 
      $siteTripleTwo 30%, 
      $siteTripleThree 30%, 
      $siteTripleThree 35%, 
      $siteTripleTwo 35%, 
      $siteTripleTwo 40%, 
      $siteTripleOne 40%,
      $siteTripleOne 45%,
	  $siteTripleThree 45%, 
      $siteTripleThree 50%, 
      $siteTripleTwo 50%, 
      $siteTripleTwo 55%, 
      $siteTripleOne 55%,
      $siteTripleOne 60%,
      $siteTripleTwo 60%, 
      $siteTripleTwo 65%, 
      $siteTripleThree 65%, 
      $siteTripleThree 70%, 
      $siteTripleTwo 70%, 
      $siteTripleTwo 75%, 
      $siteTripleOne 75%,
      $siteTripleOne 80%,
	  $siteTripleTwo 80%, 
      $siteTripleTwo 85%, 
      $siteTripleThree 85%, 
      $siteTripleThree 90%, 
      $siteTripleTwo 90%, 
      $siteTripleTwo 95%, 
      $siteTripleThree 95%
	);

position:relative;
overflow-x: hidden;
overflow-y: auto;


}

div.leftbox {
	text-align: center;
	font-size: 18px;
	color: $siteTextCol;

	position: relative;

	width: 100%;
	height: 180px; 
	z-index: 99999;
	overflow: hidden;
    border-top: 3px solid $siteTextCol;
	background-color: $siteBgCol;
}

div.rightside {
	z-index: 9;
	word-wrap: break-word;
	color: $siteTextCol;
	position: fixed;
	top: 128px;
	right: 14px;
	overflow: hidden;
	width: 11%;
	height: 713px;
    border-bottom: 3px solid $siteTextCol;
  background: linear-gradient(to bottom, 
      $siteTripleOne 5%, 
      $siteTripleTwo 5%, 
      $siteTripleTwo 10%, 
      $siteTripleThree 10%, 
      $siteTripleThree 15%, 
      $siteTripleTwo 15%, 
      $siteTripleTwo 20%, 
      $siteTripleOne 20%,
      $siteTripleOne 25%,
      $siteTripleTwo 25%, 
      $siteTripleTwo 30%, 
      $siteTripleThree 30%, 
      $siteTripleThree 35%, 
      $siteTripleTwo 35%, 
      $siteTripleTwo 40%, 
      $siteTripleOne 40%,
      $siteTripleOne 45%,
	  $siteTripleThree 45%, 
      $siteTripleThree 50%, 
      $siteTripleTwo 50%, 
      $siteTripleTwo 55%, 
      $siteTripleOne 55%,
      $siteTripleOne 60%,
      $siteTripleTwo 60%, 
      $siteTripleTwo 65%, 
      $siteTripleThree 65%, 
      $siteTripleThree 70%, 
      $siteTripleTwo 70%, 
      $siteTripleTwo 75%, 
      $siteTripleOne 75%,
      $siteTripleOne 80%,
	  $siteTripleTwo 80%, 
      $siteTripleTwo 85%, 
      $siteTripleThree 85%, 
      $siteTripleThree 90%, 
      $siteTripleTwo 90%, 
      $siteTripleTwo 95%, 
      $siteTripleThree 95%
	);
}



div.rightone {
	text-align: center;
	display: block;
	font-size: 18px;
	color: $siteTextCol;
	overflow: hidden;
}




div.myaaccountlanding {
width: 77%;
overflow: auto;
font-family: listingtext;
font-size: 18px;
position: relative;
left: 200px;
font-weight: bold;
height: 713px;
z-index: 600;
border-bottom: 3px solid $siteTextCol;
border-right: 3px solid $siteTextCol;
border-left: 3px solid $siteTextCol;
display: block;
scrollbar-width: none; 
background-color: $siteBgCol;

}




div.jtcontainer {
overflow: hidden;
height: 574px;	
position: fixed;
}



div.jobtable {
position: fixed;
left: 440px;
height: 713px;
top: 128px;
font-family: listingtext;
font-size: 26px;
width: 64%;
border-left: 3px solid $siteTextCol;
border-right: 3px solid $siteTextCol;
border-bottom: 3px solid $siteTextCol;
vertical-align: middle;
padding-left: 6px;

background-image: linear-gradient(to right, $siteNavCol, $siteBgCol, $siteNavCol);

padding-right: 6px;
font-weight: bold;
color: $siteTextCol;
z-index: 999;
text-shadow: 1px 1px 2px #aaa;

overflow-x: hidden;
overflow-y: auto; 
scrollbar-width: none; 
}


.jobheader {
font-size: 30px;
font-weight: bold;
border-bottom: 2px solid transparent;

  background: linear-gradient(to right, 
      $siteNavCol 5%, 
      $siteAccentCol 5%, 
      $siteAccentCol 10%, 
      $siteSidemenuCol 10%, 
      $siteSidemenuCol 15%, 
      $siteAccentCol 15%, 
      $siteAccentCol 20%, 
      $siteNavCol 20%,
      $siteNavCol 25%,
      $siteAccentCol 25%, 
      $siteAccentCol 30%, 
      $siteSidemenuCol 30%, 
      $siteSidemenuCol 35%, 
      $siteAccentCol 35%, 
      $siteAccentCol 40%, 
      $siteNavCol 40%,
      $siteNavCol 45%,
	  $siteSidemenuCol 45%, 
      $siteSidemenuCol 50%, 
      $siteAccentCol 50%, 
      $siteAccentCol 55%, 
      $siteNavCol 55%,
      $siteNavCol 60%,
      $siteAccentCol 60%, 
      $siteAccentCol 65%, 
      $siteSidemenuCol 65%, 
      $siteSidemenuCol 70%, 
      $siteAccentCol 70%, 
      $siteAccentCol 75%, 
      $siteNavCol 75%,
      $siteNavCol 80%,
	  $siteAccentCol 80%, 
      $siteAccentCol 85%, 
      $siteSidemenuCol 85%, 
      $siteSidemenuCol 90%, 
      $siteAccentCol 90%, 
      $siteAccentCol 95%, 
      $siteSidemenuCol 95%
	);
}

.jobsubheader {
font-size: 30px;

}

.jobsubtitle {
font-size: 22px;
padding: 0px;
}

.jobcontext {
font-family: heading;
text-shadow: 1px 1px 1px #aaa;
font-weight: lighter;
font-size: 16px;
}


.messageText {
	
	background-color: red;
	
}




.gensubheader {
font-size: 30px;

}

.gensubtitle {
font-size: 22px;
}

.gencontext {
font-family: heading;
text-shadow: 1px 1px 1px #aaa;
font-weight: lighter;
font-size: 16px;
}

p.profileEdit {
	text-align: left;
	text-shadow: none;
	font-size: 20px;
	width: 440px;
	padding: 4px;
	font-weight: bold;
	color: $siteTextCol;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );




}

a.listing:link, a.listing:visited {

	background-color:$siteBgCol;
	color: $siteLink;
	overflow: hidden;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteBgCol), color-stop(0.9, $siteTripleOne) );
	background:-moz-linear-gradient( center top, $siteBgCol 5%, $siteTripleOne 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteBgCol', endColorstr='$siteTripleOne');
	margin: 3px;
	padding-bottom: 4px;
	font-family: heading;
	padding-left: 8px;
	display:block;	
	text-decoration:none;
	font-size:17px;
	height:64px;
	font-weight: normal;
	width: 200px;
	text-align: left;
	line-height: 20px;

}





a.unread:link, a.unread:visited {

	background-color:$siteBgCol;
	color: $siteLink;
	overflow: hidden;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteBgCol), color-stop(0.9, $siteGradientCol) );
	background:-moz-linear-gradient( center top, $siteBgCol 5%, $siteGradientCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteBgCol', endColorstr='$siteGradientCol');
	margin: 3px;
	padding-bottom: 4px;
	font-family: heading;
	padding-left: 8px;
	display:block;	
	text-decoration:none;
	font-size:17px;
	height:64px;
	font-weight: normal;
	width: 200px;
	text-align: left;
	line-height: 20px;

}






a.listing:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteSidemenuCol), color-stop(0.9, $siteAccentCol) );
	background:-moz-linear-gradient( center top, $siteSidemenuCol 5%, $siteAccentCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteSidemenuCol', endColorstr='$siteAccentCol');
	color: $siteSidelinkCol;
	transform: scale(1.1);
	font-weight: bold;
	font-size: 16px;
}






.formalign {
	text-align: center;
	margin-left: auto;
	margin-right: auto;
	width: 1000px;

}

.form-style-2{
	text-align: left;
	font-weight: bold;
	font-size: 18px;
	
}
.form-style-2-heading{
	font-weight: bold;
	text-align: left;
	border-bottom: 2px solid #ddd;
	font-size: 18px;
	padding-bottom: 3px;
}
.form-style-2 label{

}

.form-style-2 span.required{
	color:green;
}

.form-style-2 input.input-field, .form-style-2 .select-field{
	background-color:$siteBgCol;
	color: $siteLink;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );


	font-family: heading;
	display:inline-block;	
	text-decoration:none;
	text-align: left;	
	font-size:16px;
	width: 70%;
}


.form-style-2 input.input-field, 
.form-style-2 .tel-number-field, 
.form-style-2 .textarea-field, 
 .form-style-2 .select-field{
	background-color:$siteBgCol;
	color: $siteLink;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteBgCol), color-stop(0.9, $siteNavCol) );
	background:-moz-linear-gradient( center top, $siteBgCol 5%, $siteNavCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteBgCol', endColorstr='$siteNavCol');
	z-index: 3;
	border: 1px solid #C2C2C2;
	font-family: heading;
	display:inline-block;	
	text-decoration:none;
	text-align: left;	
	font-size:16px;
	width: 70%;
	
}
.form-style-2 .input-field:focus, 
.form-style-2 .tel-number-field:focus, 
.form-style-2 .textarea-field:focus,  
.form-style-2 .select-field:focus{
	border: 1px solid #0C0;

}

.form-style-2 input[type=submit],
.form-style-2 input[type=button]{
	background-color:$siteBgCol;
	color: $siteLink;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteTripleTwo), color-stop(0.9, $siteNavCol) );
	background:-moz-linear-gradient( center top, $siteTripleTwo 5%, $siteNavCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteTripleTwo', endColorstr='$siteNavCol');
	z-index: 3;
	font-family: heading;
	display:inline-block;	
	text-decoration:none;
	text-align:center;
	font-size:18px;
	height: 30px;
	width: 96%;
}



.form-style-2 input[type=submit]:hover,
.form-style-2 input[type=button]:hover{
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteSidemenuCol), color-stop(0.9, $siteTripleOne) );
	background:-moz-linear-gradient( center top, $siteSidemenuCol 5%, $siteTripleOne 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteSidemenuCol', endColorstr='$siteTripleOne');
	color: $siteSidelinkCol;
	transform: scale(1.05);
}


a.thumbnail:link, a.thumbnail:visited {
border: 4px solid $siteLink;
height: 70px;
width: 70px;
padding 2px;
}


a.thumbnail:hover {
border: 4px solid $siteSidelinkCol;
transform: scale(1.2);
}




img.icons {
padding; 12px;
height: 40px;
float:left;
width: 40px;
vertical-align: middle;
}

p.lineEdit {
	text-align: left;
	text-shadow: none;
	font-size: 20px;
	width: 99%;
	padding: 3px;
	height: 40px;
	overflow: hidden;
	font-weight: bold;
	color: $siteTextCol;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );




}

div.lineEdit {
	text-align: left;
	text-shadow: none;
	font-size: 20px;
	width: 440px;
	height: 40px;
	padding: 3px;
	overflow: hidden;
	font-weight: bold;
	color: $siteTextCol;
	text-shadow: 0px 1px 2px #aaa;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );




}

input[type=submit].lineEdit,
input[type=date].lineEdit,
select.lineEdit,
input[type=select].lineEdit,
input[type=button].button.lineEdit {
	text-align: left;
	text-shadow: none;
	font-size: 20px;
	width: 440px;
	padding: 3px;
	height: 40px;
	maargin-bottom: 12px;
	overflow: hidden;
	font-weight: bold;
	color: $siteTextCol;
	
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );




}




button {
	text-align: left;
	text-shadow: none;
	font-size: 20px;
	width: 80%;
	padding: 3px;
	height: 40px;
	maargin-bottom: 12px;
	overflow: hidden;
	font-weight: bold;
	color: $siteTextCol;
	
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
background: rgb(224,224,255);
background: -moz-linear-gradient(top,  rgba(224,224,255,1) 0%, rgba(229,216,255,1) 67%, rgba(185,247,245,1) 76%, rgba(185,247,245,1) 76%);
background: -webkit-linear-gradient(top,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
background: linear-gradient(to bottom,  rgba(224,224,255,1) 0%,rgba(229,216,255,1) 67%,rgba(185,247,245,1) 76%,rgba(185,247,245,1) 76%);
filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#e0e0ff', endColorstr='#b9f7f5',GradientType=0 );

}

button:hover{
	
background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteSidemenuCol), color-stop(0.9, $siteTripleOne) );
background:-moz-linear-gradient( center top, $siteSidemenuCol 5%, $siteTripleOne 100% );
filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteSidemenuCol', endColorstr='$siteTripleOne');
color: $siteSidelinkCol;
transform: scale(1.2);



}



input[type=submit].lineEdit:hover{
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteSidemenuCol), color-stop(0.9, $siteTripleOne) );
	background:-moz-linear-gradient( center top, $siteSidemenuCol 5%, $siteTripleOne 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteSidemenuCol', endColorstr='$siteTripleOne');
	color: $siteSidelinkCol;
	transform: scale(1.2);
}





div.accentmarket {
	margin-bottom: 2px;
	text-align: center;
	padding-bottom: 5px;
	font-size: 32px;
	left: 0px;
	top: 86px;
	position: fixed;
	text-shadow: 0px 1px 2px #aaa;
	width: 100%;
	font-weight: bold;
	color: $siteAccentCol;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	z-index: 999;
	background: $siteTextCol;

}







.marketjoblist {
	text-align: center;
	font-size: 20px;
	color: $siteAccentCol;
	width: 380px; 
	float:left;
	border-bottom: 2px solid black;
	border-left: 2px solid black;
	padding-right: 17px;
	padding-left: 6px;
	box-sizing: content-box;
	height: 650px;
  background: linear-gradient(to bottom, 
      $siteTripleOne 5%, 
      $siteTripleTwo 5%, 
      $siteTripleTwo 10%, 
      $siteTripleThree 10%, 
      $siteTripleThree 15%, 
      $siteTripleTwo 15%, 
      $siteTripleTwo 20%, 
      $siteTripleOne 20%,
      $siteTripleOne 25%,
      $siteTripleTwo 25%, 
      $siteTripleTwo 30%, 
      $siteTripleThree 30%, 
      $siteTripleThree 35%, 
      $siteTripleTwo 35%, 
      $siteTripleTwo 40%, 
      $siteTripleOne 40%,
      $siteTripleOne 45%,
	  $siteTripleThree 45%, 
      $siteTripleThree 50%, 
      $siteTripleTwo 50%, 
      $siteTripleTwo 55%, 
      $siteTripleOne 55%,
      $siteTripleOne 60%,
      $siteTripleTwo 60%, 
      $siteTripleTwo 65%, 
      $siteTripleThree 65%, 
      $siteTripleThree 70%, 
      $siteTripleTwo 70%, 
      $siteTripleTwo 75%, 
      $siteTripleOne 75%,
      $siteTripleOne 80%,
	  $siteTripleTwo 80%, 
      $siteTripleTwo 85%, 
      $siteTripleThree 85%, 
      $siteTripleThree 90%, 
      $siteTripleTwo 90%, 
      $siteTripleTwo 95%, 
      $siteTripleThree 95%
	);

position:relative;
left: 0px;
top: 86px;
overflow-y: auto;

}




.marketjoblistright {
	text-align: center;
	font-size: 20px;
	color: $siteAccentCol;
	width: 370px; 
	float:left;
	border-bottom: 2px solid black;
	border-right: 2px solid black;
	padding-right: 17px;
	padding-left: 6px;
	box-sizing: content-box;
	height: 650px;
  background: linear-gradient(to bottom, 
      $siteTripleOne 5%, 
      $siteTripleTwo 5%, 
      $siteTripleTwo 10%, 
      $siteTripleThree 10%, 
      $siteTripleThree 15%, 
      $siteTripleTwo 15%, 
      $siteTripleTwo 20%, 
      $siteTripleOne 20%,
      $siteTripleOne 25%,
      $siteTripleTwo 25%, 
      $siteTripleTwo 30%, 
      $siteTripleThree 30%, 
      $siteTripleThree 35%, 
      $siteTripleTwo 35%, 
      $siteTripleTwo 40%, 
      $siteTripleOne 40%,
      $siteTripleOne 45%,
	  $siteTripleThree 45%, 
      $siteTripleThree 50%, 
      $siteTripleTwo 50%, 
      $siteTripleTwo 55%, 
      $siteTripleOne 55%,
      $siteTripleOne 60%,
      $siteTripleTwo 60%, 
      $siteTripleTwo 65%, 
      $siteTripleThree 65%, 
      $siteTripleThree 70%, 
      $siteTripleTwo 70%, 
      $siteTripleTwo 75%, 
      $siteTripleOne 75%,
      $siteTripleOne 80%,
	  $siteTripleTwo 80%, 
      $siteTripleTwo 85%, 
      $siteTripleThree 85%, 
      $siteTripleThree 90%, 
      $siteTripleTwo 90%, 
      $siteTripleTwo 95%, 
      $siteTripleThree 95%
	);

position:fixed;
right: -20px;
top: 174px;
overflow-y: scroll;
z-index: 999;
}




.marketjobpanel {
	text-align: center;
	font-size: 20px;
	border-right: 2px solid black;
	border-bottom: 2px solid black;
	color: $siteTextCol;
	width: 420px; 
	height: 650px;
    background: $siteNavCol;

position:relative;
left: -34px;
top: 86px;
overflow-y: auto;
z-index: 999;

}

.marketjobpanelright {
	text-align: center;
	font-size: 20px;
	border-left: 2px solid black;
	border-bottom: 2px solid black;
	color: $siteTextCol;
	width: 420px; 
	height: 650px;
    background: $siteNavCol;

position:fixed;
right: 378px;
top: 174px;
overflow-x: hidden;


	
}




.marketjobpanelheader {
	
	font-size: 26px;
	font-weight: bold;
	text-align: center;
	font-family: heading;
  background: linear-gradient(to right, 
      $siteNavCol 5%, 
      $siteAccentCol 5%, 
      $siteAccentCol 10%, 
      $siteSidemenuCol 10%, 
      $siteSidemenuCol 15%, 
      $siteAccentCol 15%, 
      $siteAccentCol 20%, 
      $siteNavCol 20%,
      $siteNavCol 25%,
      $siteAccentCol 25%, 
      $siteAccentCol 30%, 
      $siteSidemenuCol 30%, 
      $siteSidemenuCol 35%, 
      $siteAccentCol 35%, 
      $siteAccentCol 40%, 
      $siteNavCol 40%,
      $siteNavCol 45%,
	  $siteSidemenuCol 45%, 
      $siteSidemenuCol 50%, 
      $siteAccentCol 50%, 
      $siteAccentCol 55%, 
      $siteNavCol 55%,
      $siteNavCol 60%,
      $siteAccentCol 60%, 
      $siteAccentCol 65%, 
      $siteSidemenuCol 65%, 
      $siteSidemenuCol 70%, 
      $siteAccentCol 70%, 
      $siteAccentCol 75%, 
      $siteNavCol 75%,
      $siteNavCol 80%,
	  $siteAccentCol 80%, 
      $siteAccentCol 85%, 
      $siteSidemenuCol 85%, 
      $siteSidemenuCol 90%, 
      $siteAccentCol 90%, 
      $siteAccentCol 95%, 
      $siteSidemenuCol 95% 
	  );
}




.marketpanelbody {
	position: relative;
	background: $siteNavCol;
    word-wrap: break-word;
    text-align: left;
	padding: 3px;
    border-top: 3px solid $siteSidemenuCol;
}

.marketpaneldetails {
	position: relative;
	text-align: left;
    border-top: 3px solid $siteSidemenuCol;
    border-bottom: 3px solid $siteSidemenuCol;
	
}



div.subaccentmarket {
	margin-bottom: 2px;
	text-align: center;
	padding-bottom: 5px;
	font-size: 24px;
	left: 0px;
	top: 134px;
	position: fixed;
	text-shadow: 0px 1px 2px #aaa;
	width: 800px;
	font-weight: bold;
	color: $siteAccentCol;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	z-index: 888;
	background: $siteTextCol;
	
}



div.subaccentmarketright {
	margin-bottom: 2px;
	text-align: center;
	padding-bottom: 5px;
	font-size: 24px;
	right: 0px;
	top: 134px;
	position: fixed;
	text-shadow: 0px 1px 2px #aaa;
	width: 800px;
	font-weight: bold;
	color: $siteAccentCol;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	z-index: 889;
	background: $siteTextCol;
	
}




a.marketjoblistlink:link, a.marketjoblistlink:visited {

	background-color:$siteBgCol;
	color: $siteLink;
	overflow: hidden;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteBgCol), color-stop(0.9, $marketBuyCol) );
	background:-moz-linear-gradient( center top, $siteBgCol 5%, $marketBuyCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteBgCol', endColorstr='$marketBuyCol');
	font-family: heading;
	margin: 2px;
	padding: 6px;
	display:block;	
	text-decoration:none;
	height:64px;
	font-weight: normal;
	width: 340px;
	text-align: left;
	line-height: 20px;

}







a.marketjoblistlinkright:link, a.marketjoblistlinkright:visited {

	background-color:$siteBgCol;
	color: $siteLink;
	overflow: hidden;
	text-shadow: 0px 1px 2px #aaa;
	box-shadow: 1px 1px 1px $siteLink;
	-moz-box-shadow: 1px 1px 1px $siteLink;
	-webkit-box-shadow: 1px 1px 1px $siteLink;
	-webkit-border-top-left-radius:1px;
	-moz-border-radius-topleft:1px;
	border-top-left-radius:1px;
	-webkit-border-top-right-radius:1px;
	-moz-border-radius-topright:1px;
	border-top-right-radius:1px;
	-webkit-border-bottom-right-radius:1px;
	-moz-border-radius-bottomright:1px;
	border-bottom-right-radius:1px;
	-webkit-border-bottom-left-radius:1px;
	-moz-border-radius-bottomleft:1px;
	border-bottom-left-radius:1px;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteBgCol), color-stop(0.9, $marketSellCol) );
	background:-moz-linear-gradient( center top, $siteBgCol 5%, $marketSellCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteBgCol', endColorstr='$marketSellCol');
	font-family: heading;
	margin: 2px;
	padding: 6px;
	display:block;	
	text-decoration:none;
	height:64px;
	font-weight: normal;
	width: 340px;
	text-align: left;
	line-height: 20px;

}



a.marketjoblistlink:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteTripleOne), color-stop(0.9, $siteAccentCol) );
	background:-moz-linear-gradient( center top, $siteTripleOne 5%, $siteAccentCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteTripleOne', endColorstr='$siteAccentCol');
	color: $siteSidelinkCol;
	transform: scale(1.04);
	font-weight: bold;
	font-size: 16px;
}


a.marketjoblistlinkright:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.5, $siteTripleOne), color-stop(0.9, $siteAccentCol) );
	background:-moz-linear-gradient( center top, $siteTripleOne 5%, $siteAccentCol 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='$siteTripleOne', endColorstr='$siteAccentCol');
	color: $siteSidelinkCol;
	transform: scale(1.04);
	font-weight: bold;
	font-size: 16px;
}



</style>";

//
//
////////////////// CSS ENDS

?>
