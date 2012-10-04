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

var watchForZombie =  function(name) {
	var currentHour = (new Date()).getHours(),
		timeOfDay;
	if (currentHour < 12) { timeOfDay = "morning"; }
	else if (currentHour < 17) { timeOfDay = "afternoon"; }
	else { timeOfDay = "night"; }
	console.log("Hey it's " +timeOfDay + ", keep your eyes open for " + name + "!");

};

watchForZombie("zombies");

console.log ("Hey " + survivors[2] + " it looks like a group of other survivors is heading our way!");
console.log ("They're from the next town over, we need to check " + survivors[0] + ", " + survivors[1] + ", and " + survivors[3] + " for any bites or else we are all dead!");

var checkingForBites = function(name) {
	var notBitten=true, notSick=true, bitten=false;

if ((notBitten && notSick) || bitten) {infection = "are not infected";} 
	else {infection = "are all bitten he is infected!"}
	infection = name + infection;
	return infection;
};

var fullCheck = checkingForBites("Mike, Sam, Jake ");
console.log(fullCheck);

console.log ("While our guard was down we didn't notice the zombies surrounding us.")


var ammo = 10;
var zombies = 11;
	console.log ("I only have " + ammo + " rounds of ammo left and there are " + zombies + " zombies and none of the others have any ammo")
while (ammo > 0, zombies > 0) {
	console.log ("There are " + zombies + " zombies left and only " + ammo + " rounds left!")
	ammo--, zombies--;
};
 
var makeShiftWeapon ="baseball bat";
