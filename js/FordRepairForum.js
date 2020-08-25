// FordRepairForum.js

// login form button fades colors on hover and pointer removal.

$(document).ready(function(){
	"use strict";
	
	var toggleButton = $("#formButton");
	toggleButton.hover(function(){
		formButton.css("background-color", "grey");
	}, function(){
		formButton.css("background-color", "smokewhite");
	});
})