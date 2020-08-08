/*
 * ECMAScript für einfache Tests 
 */

function alertMe(text) {
	window.alert(text);
}

function arrayTest() {
	let sithLords = ["Darth Revan", "Darth Maul", "Darth Vader", "Darth Sidious"];
	for (i in sithLords) {
		alertMe(sithLords[i]);
	}
}

function setFokus(elementID) {
	// document.getElementById(elementID).focus;
	let elementButton = document.getElementById(elementID);
	elementButton.focus();
	// alertMe(elementID);
}

function drueckDenButton() {
	let divElement = document.getElementById("divContainerID01");
	divElement.innerHTML = "Der Button wurde gedrückt";
}

function zeigeErfolgtenEventHandler() {
	let divElement = document.getElementById("divContainerID01");
	divElement.innerHTML = "Der EventHandler hat zugeschlagen";
	
	// let elementButton = document.getElementById('testButtonID');
	//elementButton.click();
	
	setFokus('testButtonID');
	
	// let btnElement = document.getElementById("testButtonID");
	// btnElement.focus();
	
	
}

document.addEventListener('DOMContentLoaded',zeigeErfolgtenEventHandler());
//document.addEventListener('DOMContentLoaded',setFokus('testButtonID'));
// document.addEventListener("loadeddata",setFokus('testButtonID'));
// window.onload = setFokus('testButtonID');
 // window.addEventListener('load',setFokus('testButtonID'));
//setFokus('testButtonID');


