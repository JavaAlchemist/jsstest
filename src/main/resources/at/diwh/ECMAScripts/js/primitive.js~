/*
 * ECMAScript für einfache Tests 
 * diwh 08-2020
 */

function alertMe(text) {
	window.alert(text);
	console.log(text);
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
	var b = document.body;
	var alleElemente = b.getElementsByTagName("*");
	console.log("Anzahl Elemente: " + alleElemente.length);
	for (i in alleElemente) {
		console.log("---------------");
		console.log(alleElemente[i].innerHTML);
	}
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


