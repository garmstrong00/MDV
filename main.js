// Project 3
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
		var formTag = document.getElementsByTagName("form");
			selectLi = $('select');
			makeSelect = document.createElement('select');
			makeSelect.setAttribute("id", "select");
		for(i=0, j=gameSystems.length; i<j; i++){
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
	
	function storeData(key){
		if(!key){
			var id 				= Math.floor(Math.random()*10000001);
		}else{
			id = key;
		}
		
		// Gather all form field values and store in object
		getCheckBoxValue();
		var item			= {};
			item.title  	= ["Title:", $('title').value];
			item.select  	= ["System:", $('select').value];
			item.date		= ["Release Date:", $('releaseDate').value];
			item.rating 	= ["Rating:", $('rating').value];
			item.bonus  	= ["Has Pre-Order Bonus?:", bonusValue];
			item.comments 	= ["Pre-Order Bonuses:", $('comments').value];
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
			var linksli = document.createElement('li');
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
				makeSubList.appendChild(linksli);
			}
			makeItemLinks(localStorage.key(i), linksli);
		}	
	
	}
	//create edit and delete links
	function makeItemLinks(key, linksli){
		var editLink = document.createElement('a');
		editLink.href = "#";
		editLink.key = key;
		var editText = "Edit Game";
		editLink.addEventListener('click', editItem);
		editLink.innerHTML = editText
		linksli.appendChild(editLink);
		
		var breakTag = document.createElement('br');
		linksli.appendChild(breakTag);
				
		var deleteLink = document.createElement('a');
		deleteLink.href = "#";
		deleteLink.key = key;
		var deleteText = "Delete Game";
		deleteLink.addEventListener('click', deleteItem);
		deleteLink.innerHTML = deleteText;
		linksli.appendChild(deleteLink);
	
	}
	
	function editItem(){
		var value = localStorage.getItem(this.key);
		var item = JSON.parse(value);
		
		toggleControls("off");
		
		$('title').value = item.title[1];	
		$('select').value = item.select[1];
		$('releaseDate').value = item.date[1];
		$('rating').value = item.rating[1];
		if(item.bonus[1] == "Yes"){
			$('fav').setAttribute("checked", "checked");
		}
		$('comments').value = item.comments[1];
		
		//remove initial listener from save contact button
		save.removeEventListener("click", storeData);
		$('submit').value = "Edit Game";
		var editSubmit = $('submit');
		editSubmit.addEventListener("click", validate);
		editSubmit.key = this.key;		
	}
	
	function deleteItem(){
		var ask = confirm("Are you sure you want to delete this listing?")
		if(ask){
			localStorage.removeItem(this.key);
			window.location.reload();
		}else{
			alert("Item was not deleted")
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
	
	function validate(e){
		//define elements to check
		var getTitle = $('title')
		var getSystem = $('select')
		
		//reset error message
		errMsg.innerHTML = "";
			getTitle.style.border = "1px solid black";
			getSystem.style.border = "none";
		
		var messageAry = [];
		//Title Validation
		if(getTitle.value ===  ""){
			var titleError = "Please Enter A Title";
			getTitle.style.border = "1px solid red";
			messageAry.push(titleError)
		}
		//System validation
		if(getSystem.value=="--Choose A System--"){
			var systemError = "Please Choose A System";
			getSystem.style.border = "1px solid red";
			messageAry.push(systemError)
		}
	if(messageAry.length >= 1){
		for(var i=0, j=messageAry.length; i < j; i++){
			var txt = document.createElement('li');
			txt.innerHTML = messageAry[i];
			errMsg.appendChild(txt);
		}
		e.preventDefault();
		return false;
	}else{
	
		storeData(this.key);
		}	
	}
	//variable defaults
	var gameSystems = ["--Choose A System--", "Xbox360", "Playstation 3", "WiiU", "Nintendo 3DS"],
		bonusValue = "no",
		errMsg = $('errors');
	;
	makeCats();	 
	

	//Set Link & Submit Click Events
	
	var displayLink = $('viewPreorders');
	displayLink.addEventListener("click", getData);
	var clearLink = $('clear');
	clearLink.addEventListener("click", clearLocal);
	var save = $('submit');
	save.addEventListener("click", validate);



















}); 