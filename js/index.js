/*
index.js
*/
$(document).ready(function(){

"use strict";


var resultList = $("#resultList");
resultList.text("This is from jQuery");

var toggleButton = $("#toggleButton");
toggleButton.on("click", function(){
	resultList.toggle(500);
	
	if(toggleButton.text() == "Hide") toggleButton.text("Show");
		else toggleButton.text("Hide");
});

var listItems = $("header nav li");
listItems.css("font-weight", "bold");
// $("header nav li:first").css("font-size", "18px");
listItems.filter(":first").css("font-size", "18px");

var msg = "hello Javascript";
console.log(msg);
console.log("");

// var resultsDiv = document.getElementById("results");
// resultsDiv.innerHTML = "<p>This is from Javascript</p>";

console.log("-Object and array testing-");
// var result = {
	// name: "jQuery",
	// language: "JavaScript",
	// score: 4.5,
	// showLog: function(){
		
	// },
	// owner: {
		// login: "myNameIs",
		// id: 123456
	// }
// };

// result.phoneNumber = "123-456-7890";

var results = [{
	name: "jQuery",
	language: "JavaScript",
	score: 4.5,
	showLog: function(){
		
	},
	owner: {
		login: "myNameIs",
		id: 123456
	}
}, {
	name: "jQuery UI",
	language: "JavaScript",
	score: 3.5,
	showLog: function(){
		
	},
	owner: {
		login: "myNameIs",
		id: 123456
	}
}];


for (var x=0; x < results.length; x++){
	var result = results[x];
	// if(result.score < 4) break;
	if(result.score > 4) continue;
	console.log(result.name);
}

// console.log(result.name);
// console.log(result.phoneNumber);

// console.log(results.length);
// console.log(results[0].name);

// results.push(result);
// results.push({
	// name: "dummy project"
// });
console.log("");


console.log("-type testing-");
console.log("msg is " + typeof(msg));
console.log("resultsDiv is " + typeof(resultsDiv));

var none;
console.log("none is " + typeof(none));

var aNumber = 10;
console.log("aNumber is " + typeof(aNumber));

var trueFalse = true;
console.log("trueFalse is " + typeof(trueFalse));
console.log("");

// msgs = "this shouldn't work";

// Overloading functions is not supported
// function showMsg(msg){
	// console.log("showMsg function: " + msg);
// }

// function showMsg(msg, more){
	// console.log("showMsg+ " + msg + more);
// }

console.log("-function testing-");
function showMsg(msg, more){
	if (more){
		console.log("showMsg+ " + msg + more);
	} else {
		console.log("showMsg+ " + msg);
	}
}

showMsg("some information");
showMsg("more information", " overloading functions is not supported");

var showIt = function(msg){
	console.log(msg);
}

showIt("some message");

function showItThen(msg, callback){
	showIt(msg);
	callback();//defining a new function in the showItThen arguements
}

showItThen("showItThen called", function(){
	console.log("callback called");//this is calling a function 'showItThen', but also supplying a callback as an arguement for 'showItThen'. A callback is a function used asyncronous: registering for events, making network requests, waiting for user to interact. They all expect start execution and then wait for events like a user click a button or network request completes.
});
console.log("");


console.log("-scope testing-");
var inGlobal = true;
//a function is the only thing that will make a smaller scope
function testScope(){
	console.log("testScope(): " + inGlobal);
	
	var someMsg = "some Message";
	console.log("testScope(): " + someMsg);
	

}

// console.log("global: " + someMsg); Commented out since it breaks the rest of the script
testScope();
console.log("");


console.log("-Closure Testing-");
//Commented out cuz breaks script with out of scope call to 'someMsg' variable
// function testClosure(){
	// testScope();
	
	// showItThen("with Closure", function(){
		// showIt("testScope With Closure(): " + someMsg);
	// });
// }
// testClosure();

function testClosure2(){
	console.log("testScope(): " + inGlobal);
	
	var someMsg = "some Message";
	console.log("testScope(): " + someMsg);
	
	showItThen("with Closure", function(){
		showIt("testScope with Closure(): " + someMsg);
	});
}
testClosure2();
console.log("");


console.log("-if else testing-");
if(none == undefined){
	console.log("none is undefined");
}

if(!none){
	console.log("!none shows none is undefined");
}

if (aNumber == "10"){
	console.log("aNumber == '10' even if aNumber is an integer");
}

if (aNumber === "10"){
	console.log("aNumber === '10' even if aNumber is an integer");
} else{
	console.log("aNumber does not === '10' as aNumber is not a string");
}

if (aNumber !== "10"){
	console.log("aNumber !== '10' because aNumber is not a string");
} else{
	console.log("aNumber equals '10' as aNumber is a string '10'");
}

if (aNumber = "10"){
	console.log("aNumber !== '10' because aNumber is not a string");
} else{
	console.log("aNumber equals '10' as aNumber is a string '10'");
}

if (aNumber = "10"){
	console.log("aNumber = '10' always because this is an assignment. '10' is assigned to aNumber inside the if statement's conditional");
}

})