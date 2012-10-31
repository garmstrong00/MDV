// Project 2
// Visual Frameworks
// Greg Armstrong

// Wait until the DOM is ready
window.addEventListener("DOMContentLoaded", function(){

	// getElementById Function
	function $(x){
		var theElement = document.getElementById(x);
		return theElement;
	}
	
	//create select field element
	function makeCats(){
		var fromTag = document.getElementsByTagName("form"),
			selectLi = $('select'),
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "systems");
		for(var i=0, j=gameSystems.length; i<j; i++){
			var makeOption = document.createElement('option');
			var optText = gameSystems[i];
			makeOption.setAttribute("value", optText);
			makeOption.innerHTML = optText;
			makeSelect.appendChild(makeOption);
		}	
		selectLi.appendChild(makeSelect);
	}
	
	function getCheckBoxValue(){
		if($('bonus').checked){
			bonusValue = $('bonus').value;
		}else{
			bonusValue = "no"
		}

	}
	function toggleControls(n){
		switch(n){
			case "on":
				$('preorderList').style.display = "none";
				$('clear').style.display = "inline";
				$('viewPreorders').style.display = "none";
				$('addNew').style.display = "inline";
				break;
			case "off":
				$('preorderList').style.display = "block";
				$('clear').style.display = "inline";
				$('viewPreorders').style.display = "inline";
				$('addNew').style.display = "none";
				$('items').style.display = "none";
				break;
			default:
				return false;	
	
		}
	
	};
	
	function storeData(){
		var id 				= Math.floor(Math.random()*10000001);
		// Gather all form field values and store in object
		getCheckBoxValue();
		var item			= {};
			item.title  	= ["Title", $('title').value];
			item.systems  	= ["System", $('select').value];
			item.date		= ["Release Date", $('releaseDate').value];
			item.rating 	= ["Rating", $('rating').value];
			item.bonus  	= ["Has Pre-Order Bonus?", bonusValue];
			item.comments 	= ["Pre-Order Bonuses", $('comments').value];
		//Save data into local storage
		localStorage.setItem(id, JSON.stringify(item));
		alert("Pre-Order Saved!");
	}
	
	function getData(){
		toggleControls("on")
		//Write Data from local storage to browser.
		var makeDiv = document.createElement('div');
		makeDiv.setAttribute("id", "items");
		var makeList = document.createElement('ul');
		makeDiv.appendChild(makeList);
		document.body.appendChild(makeDiv);
		$('items').style.display = "block";
		for(var i=0, len=localStorage.length; i<len;i++){
			var makeli = document.createElement('li');
			makeList.appendChild(makeli);
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			//Convert String from Local Storage back To Object using JSON
			var obj = JSON.parse(value);
			var makeSubList = document.createElement('ul');
			makeli.appendChild(makeSubList);
			for(var n in obj){
				var makeSubli = document.createElement('li');
				makeSubList.appendChild(makeSubli);
				var optSubText = obj[n][0]+" "+obj[n][1];
				makeSubli.innerHTML = optSubText;
			}
		}	
	
	}
	
	function clearLocal(){
		if(localStorage.length === 0){
			alert("There is no data to clear.")
		}else{
			localStorage.clear();
			alert("All data has been deleted");
			window.location.reload();
			return false;
		}
	}
	
	
	//variable defaults
	var gameSystems = ["--Choose A System--", "Xbox360", "Playstation 3", "WiiU", "Nintendo 3DS"],
		bonusValue = "no"
	;
	makeCats();	 
	

	//Set Link & Submit Click Events
	
	var displayLink = $('viewPreorders');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", storeData);



















}); 