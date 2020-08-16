/*
 * ECMAScript für einfache Tests 
 * diwh 08-2020
 */

var angestellter = new objTest("Bernd", 55, "Jasager");

function alertMe(text) {
	window.alert(text);
	console.log(text);
}

function objTest (name, alter, beruf) {
	this.name = name;
	this.alter =alter;
	this.beruf = beruf;
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

function drueckButtonB(element) {
	alertMe(Date());
	  
}

function drueckButtonC(element) {
	divElement = document.getElementById("divContainerID01");
	// divElement.innerHTML = "Der Button " + element.id + " mit Titel " + element.innerHTML + " wurde gedrückt";
	divElement.innerHTML = angestellter.name + " ist " + angestellter.alter + " und arbeitet als " + angestellter.beruf;
	for (var x in angestellter) {
		divElement.innerHTML = divElement.innerHTML + "<br/> hat Attribut: " + x + "mit Wert: " + angestellter[x];
	}
	  
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


