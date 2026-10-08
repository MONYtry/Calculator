var ergebniss;
let rechenweg;
let test;

let sum;

let z1 = 0;
let z2 = 0;
//let z3 = 0;
// Old Code from around 2024/2023 :)
// Just leaving it here to see the progress I've made
let operator;
var rechenanzeige;

let error = false;

const zahlen = [z1,z2,z3,z4,z5,z6,z6]
//Hier wird eine Variable erstellt für ein Textfeld in HTML mit dem namen Display
let Display = document.getElementById("Display");
Display.textContent = "";

let DisplayV2 = document.getElementById("DisplayV2");
DisplayV2.textContent = "Noch kein Ergebniss!";

let ERROR = document.getElementById("errorMessage");
ERROR.textContent = "";


///////////////////////////// Hinzufügung der Zahlen in das Display ///////////////////////////////////////////////

//z1 ist der Übergabeparameter 
function zahlschreiben(z1) 
{
	//Übersetzt ein Komma zu einem Punkt!
	//Damit wir es nutzen können zum Rechnen
	if (z1 === ",") z1 = ".";
	
	//Hier wird die erste Zahl zum Display hinzugefügt 
	Display.value += z1;
	Display.textContent += z1;
}



function checkop(op) //Operator wird geprüft und der Variable operator zugeordnet!
{
	switch (op) {
		case "+":
		operator = "+";
		Display.textContent += "+";
		console.log("Klick registiert! (+)")
		break;
		
		case "-":
		operator = "-";
		Display.textContent += "-";
		console.log("Klick registiert! (-)")
		break;
		
		case "*":
		operator = "*";		
		Display.textContent += "*";
		console.log("Klick registiert! (*)")
		break;
		
		case "/":
		operator = "/";
		Display.textContent += "/";
		console.log("Klick registiert! (/)")
		break;
		
		case "C":
		clearDisplay();
		break;
		
	}
}
////////////////////////////////////////////////// AUSLESUNG DES DISPLAYS ///////////////////////////////////////////////////////////
function readdisplay()
{
	//Hier wird die Variable für die Anzeige erstellt
	rechenanzeige = Display.textContent; // String 
	
	const char = rechenanzeige.split(operator); //In die Variable Char wird gespeichert: 
												//Es wird beim Operator gesplitet alles was davor oder dahinter ist.
												//Char sieht nun folgendes: ["zahl1" ; "zahl2"]
	z1 = parseFloat(char[0]);					//Hier wird es von einem String zu einem Integer umgewandelt
	z2 = parseFloat(char[1]);					//Und auf 2 Dezimalzahlen gerundet
	z3 = parseFloat(char[2]);	
	
	//Nur zum Debung gerade da!
	console.log(z1, z2)
	
	//clearDisplay();							//Hier wird die function aufgerufen zum Clearen des Displays
	
}



function errorNachricht()
{
	if (error == true)		
	{
		ERROR.textContent = "Es ist ein Fehler aufgetreten!";
		error = false;
	}
	else 
	{
		ERROR.textContent = "";
	}
}

function clearDisplay()  
{
		Display.value = "";
		DisplayV2.textContent = "Noch kein Ergebniss!";
		Display.textContent = "";
}


/////////////////////////////// ---Main Methode--- //////////////////////////////////////////////////////////////



function calc() 
{
	if (operator !== null)
	{
		readdisplay();
	switch (operator) {
		case "+":
		//console.log(z1);
		//console.log(z2);
		
/////////////////////// TEST BERECHNUNG LÖSCHEN FALLS NÖTIG! ///////////////////////////////////////////
		
		//Hier wird eine neue Variable erstellt zum Abrunden der Ergebnisse  
		s1 = z1.toFixed(2);
		s2 = z2.toFixed(2);
		//s3 = z3.toFixed(2);

		console.log(s1);
		console.log(s2);
		//ergebniss = s1 + s2;
		ergebniss = z1 + z2;
		rechenweg = s1 + "+" + s2;
		console.log(ergebniss);
		break;
		
		case "-":
		ergebniss = z1 - z2;
		rechenweg = z1 + "-" + z2;
		break;
		
		
		case "*":
		ergebniss = z1 * z2;
		rechenweg = z1 + "*" + z2;
		break;
		
		case "/":
		ergebniss = z1 / z2;
		rechenweg = z1 + "/" + z2;
		break;
		
		
		//default:
		//textausgabe();
	}

	textausgabe();
	}
}




/////////////////////////////// ---TEXT AUSGABE--- //////////////////////////////////////////////////////////////


//Wieso habe ich das erstellt? 
//Weil somit alles Zentral zusammen ist vorher waren es 2/3 Methoden jetzt ist es eine!

function textausgabe()
{
	if (operator == null) 
	{
		console.log("Es wurde kein Operator gefunden!");
		Display.textContent = "Es wurde kein Operator gefunden!";
		DisplayV2.textContent = "Es konnte kein Rechenweg erstellt werden..."
		error = true;
		setTimeout(clearDisplay, 1000);
		errorNachricht();
		setTimeout(errorNachricht, 2000);
	}
	
	if (z2 == null)
	{
		console.log("Es wurde keine Zahl 2 gefunden!");
		DisplayV2.textContent = "Es konnte kein Rechenweg erstellt werden..."
		error = true;
		setTimeout(clearDisplay, 1000);
		errorNachricht();
		setTimeout(errorNachricht, 2000);
	}
	
	if (isNaN(z2)) 
	{
		console.log("Es wurde keine Zahl 2 gefunden!");
		Display.textContent = "Es wurde keine Zahl 2 gefunden!";
		DisplayV2.textContent = "Es konnte kein Rechenweg erstellt werden..."
		error = true;
		setTimeout(clearDisplay, 2000);
		errorNachricht();
		setTimeout(errorNachricht, 2000);
	}	
		
	sum = ergebniss.toFixed(2);
	Display.textContent = sum;
	DisplayV2.textContent = rechenweg;	
	// Lustiger Fehler ---> } 
}

