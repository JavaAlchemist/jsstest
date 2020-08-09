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
	clearInterval(checkIntervall);
}

function drueckLineButton(element) {
	divElement = document.getElementById("divContainerID01");
	divElement.innerHTML = "Der Button " + element.id + " mit Titel " + element.innerHTML + " wurde gedrückt";
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
let timerAusgabe = document.getElementById("timeDIV");
let zaehler = 0;
var checkIntervall = setInterval(() => {
	zaehler++;
	timerAusgabe.innerHTML = "Sekunden: " + zaehler;
}, 1000);
//document.addEventListener('DOMContentLoaded',setFokus('testButtonID'));
// document.addEventListener("loadeddata",setFokus('testButtonID'));
// window.onload = setFokus('testButtonID');
 // window.addEventListener('load',setFokus('testButtonID'));
//setFokus('testButtonID');


