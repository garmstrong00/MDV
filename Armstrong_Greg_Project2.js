// Greg Armstrong
// SDI 1210
// Project 2


var myName = "Greg";
var daysSinceOutbreak = 30;
var survivors = ["Mike", "Sam", "Lisa", "Jake"];

console.log ("My name is " + myName +".");
console.log ("It has been " + daysSinceOutbreak + " days since the dead started walking");
console.log ("I have come across another survivor " + survivors[2] + " while looking for supplies.");
console.log ("We have been looking for other survivors along with any supplies we can find.");

var watchForZombies = function(name) {
	var currentHour = (new Date()).getHours(),
	timeOfDay;
	if (currentHour < 5) { timeOfDay = "early morning"; }
	else if (currentHour < 17) { timeOfDay = "afternoon"; }
	else { timeOfDay = "night";}
	console.log ("Hey it's " + timeOfDay + " keep your eyes open for " + name); 

};

lookForZombies = ("zombies");