//Greg Armstrong
//SDI 1210
//Project 3

//JSON


var jsonData = {
	"survivors" : [
		{
			"age": 20,
			"name": "Max",
			"job": "Marine",
			"favoritefood": "Meat"
		},
		{
			"age": 21,
			"name": "Lisa",
			"job": "Teacher",
			"favoritefood": "Sweets"		
		},
		{
			"age": 32,
			"name": "Jake",
			"job": "Scientist",
			"favoritefood": "Fruit"
		},
		{
			"age": 19,
			"name": "Sam",
			"job": "Student",
			"favoritefood": "Vegan"
		}
	]
};

var jsonstring = JSON.stringify(jsonData);


var receivedjson = JSON.parse(jsonstring);



var leader = "Greg",
		survivorsNumber = receivedjson["survivors"];
		anySurvivorsToday = false;


//object
var leader = {
		realName:	"Greg",
		position:	"Leader of the group",
		jobs:		["Help other Survivors", "Find Safety"],
		announce: 	function(message) {
			var quotes = "\"";
			announcement = quotes + message + quotes;
			console.log(announcement);
		},
		checkSurvivors: function(anySurvivorsToday) {
			var survivorsStatus = anySurvivorsToday;
			if (survivorsStatus === true) {
				leader.announce("It's " + survivorsStatus + ".  We have more survivors today, our group is getting big.");
				leader.countSurvivors(survivorsStatus, survivorsNumber);
			} else {
				leader.announce("It's " + survivorsStatus + ".  We don't have more survivors today.");
			};
		},
		// method: procedure
		countSurvivors: function(survivorsStatus, survivorsNumber) {
			if (survivorsStatus === true) {
				leader.announce("Let's get started! We have ");
				for (var n=0; n <= survivorsNumber.length; n++){
					var survivorsToFeed = n;
					leader.announce(survivorToFeed);
				}
				leader.announce(" survivors to feed today.");
				return survivorStatus;
			} else {
					leader.announce("We have no new survivors today, Less mouths to feed for now. ");
			};
		},
		



