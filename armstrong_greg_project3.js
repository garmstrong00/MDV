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
		getRealName: function(name){
			var realName = name;
			return realName;
		},
		
		getData: function(json) {
			var i = 0;
			while (i<json.survivors.length){
				var survivors = json.survivors[i];
				leader.announce("Age: " + survivors.age + ", Name: " + survivors.name + ", Job: " + survivors.job + ", Favorite Food: " + survivors.favoritefood);
				i++;
			};
			return json;
		},
		getSurvivors: function() {
			for (var n=0; n < receivedjson["survivors"].length; n++) {
				var name = receivedjson["survivors"][n].name;
				leader.announce("Hey " + name + "! time to eat before we move out!");
			}
		},
		
		feedSurvivors: function(name){
			var survivorsDish = [];
			var prepareFood = function(item) {
				if (item == favoritefood) {
					survivorsBowl.push(item);
					leader.announce(survivorsBowl);
				} else {
					leader.announce("This isn't the right food!");
				}
			}
			var preparedFood = "Time to add " + "Meat" + " to the menu for " + name + ".";
			leader.announce(preparedFood);
		},
		
		cleanMess: function(mess){
			leader.announce("ARGH, I have to clean the van because " + mess);
			var mess = mess.length;
			for (var messCleaned = 0; messCleaned < mess; messCleaned +=10) {
				leader.announce(messCleaned + "% Lisa's mess cleaned up.");
				if (mess > messCleaned) {
					var messLeft = mess - messCleaned;
					leader.announce(messLeft + " more minuets to go.");
				};
			}
			leader.announce("I'm done, Time for me to take watch, we leave in the morning!");

		}
	},
	survivors = {
		makeAMess: function(survivors,food) {
			var survivorsMess = survivors + " got " + food + " all over the floor.";
			console.log(survivorsMess);
			return survivorsMess;
		}
	};
leader.announce("I am here to " + leader.jobs[0] + "!  I am the " + leader.position + ".");
leader.checkSurvivors(anySurvivorsToday);
leader.announce("Here's who we have with us now.");
leader.getData(jsonData);
var myName = leader.getRealName(leader.realName);
leader.announce("I hope we find some other survivors before we move out! or else people will be looking for " + myName + " here  still!");
leader.getSurvivors();
leader.feedSurvivors("Max", "Lisa"); 
var mess = survivors.makeAMess("Lisa", "Zombie Guts"); 
leader.cleanMess(mess); 



