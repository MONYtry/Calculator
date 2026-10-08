// ######################## //
//        Calculator        //
//      made by MONY        //
//    Re-made 08.10.2026    //
// ######################## //

var result;
var operatoren = [];
var numbers;
var trueNumbers;

function numadd(newInput) 
{
    if (newInput == ",") newInput = ".";

    let Display = document.getElementById("Display");
    Display.value += newInput;
    console.log("Neue Anzeige: " + Display.value);
}


function operatoradd(operator) 
{
    // Anzeige 
    let Display = document.getElementById("Display");
    Display.value += operator;

    // Fügt den neuen Operator in die Liste 
    operatoren.push(operator);

    // Holt sich alles aus dem Display
    numbers = Display.value;

    // Teilt alle Zahlen auf
    numbers = numbers.split(/[+\-*/]/);
}


function  stringToInt() {
    try {
        trueNumbers = numbers.map(Number);
        return true;
    }
    catch {
        console.log("Error!");
        return false;
    }
}


function calculate() 
{
    let Display = document.getElementById("Display");
    
    // Vermeidet Nullpointer
    if (Display.value == "") return;

    // Zerteilt die Nummern wieder
    numbers = Display.value.split(/[+\-\*/]/);

    // Macht den String zu einem Int
    if (!stringToInt()) return;

    // Punkt vor Strich
    for (var i = 0; i < operatoren.length; i++) 
    {
        if (operatoren[i] == "*" || operatoren[i] == "/") 
        {
            getResult(trueNumbers[i], operatoren[i], trueNumbers[i + 1]);

            trueNumbers[i] = result;
            trueNumbers.splice(i + 1, 1);
            operatoren.splice(i, 1);

            i--;
        }
    }

    for (var i = 0; i < operatoren.length; i++) 
        {
        getResult(trueNumbers[i], operatoren[i], trueNumbers[i + 1]);

        trueNumbers[i] = result;
        trueNumbers.splice(i + 1, 1);
        operatoren.splice(i, 1);

        i--;
    }

    Display.value = result;

    operatoren = [];
    
    Display.value = "";
    Display.value += result;
}


function getResult(numberOne, operator, numberTwo) 
{   
    switch (operator) 
    {
        case "+":
            result = numberOne + numberTwo;
            break;

        case "-":
            result = numberOne - numberTwo;
            break;

        case "*":
            result = numberOne * numberTwo;
            break;

        case "/":
            result = numberOne / numberTwo;
            break;
    }

    console.log("Rechenweg: " + numberOne + operator + numberTwo);
    console.log(result);
    
    return true;
}


function clearDisplay()
{
    let Display = document.getElementById("Display");
    
    if (Display.value == "") return;
    Display.value = "";

    console.log("Display wurde geleert!");
}