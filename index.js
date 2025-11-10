/* Objective 6: 'use strict' */
'use strict';
/* Objective 6: 'use strict' */

const prompt = require('prompt-sync')({ sigint: true });

/* Objective 1: User Input Handling */
/* Get number input */
function getValidNumberInput(promptMessage) {
    let mynum;
    while (true) {
        mynum = prompt(promptMessage);
        mynum = mynum.replaceAll(" ", "_");
        if (!isNaN(mynum)) {
            break;
        }
    }
    return Number(mynum);
}

/* Get operator input */
function getValidOperatorInput(promptMessage) {
    let myoperator;
    let arrOperator = ["+", "-", "*", "/", "%", "**"];
    while (true) {
        myoperator = prompt(promptMessage);
        if (arrOperator.includes(myoperator)) {
            break;
        }
    }
    return myoperator;
}
/* Objective 1: User Input Handling */

/* Objective 2: Basic Arithmetic Operation (Functions and Operators) */
function add(a, b) {
    // Type Conversions here
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero!";
    } else {
        return a / b;
    }
}

function modulo(a, b) {
    return a % b;
}

function power(a, b) {
    return a ** b;
}
/* Objective 2: Basic Arithmetic Operation (Functions and Operators) */

/* Objective 3: Main Calculator Logic (Switch & If/Else) */

let num1, num2, operator, myresult;
let again;

let ispositive = true;
let iszero = false;
let iseven = true;
let summarymessage;
let nullishCoalescingcheckmsg;

while (true) {

    console.log("----------------------------------------");

    num1 = getValidNumberInput("Enter first number: ");
    num2 = getValidNumberInput("Enter second number: ");
    operator = getValidOperatorInput("Enter an operator: ");

    switch (operator) {
        case "+":
            myresult = add(num1, num2);
            break;
        case "-":
            myresult = subtract(num1, num2);
            break;
        case "*":
            myresult = multiply(num1, num2);
            break;
        case "/":
            myresult = divide(num1, num2);
            break;
        case "%":
            myresult = modulo(num1, num2);
            break;
        default: // for "**" 
            myresult = power(num1, num2);
            break;
    }

    /* Objective 4: Data Type Analysis & Conditional Output */
    console.log("Here is the result: " + num1 + " " + operator + " " + num2 + " = " + myresult);

    console.log("Data Type Analysis & Conditional Output: ");
    console.log("Data type of the result: " + typeof (myresult));

    // Nullish Coalescing check
    nullishCoalescingcheckmsg = myresult ?? "Result is undefined or null, something went wrong!";

    if (isNaN(myresult)) {
        console.log("The result shows error message");
    } else if (isNaN(nullishCoalescingcheckmsg)) {
        console.log(nullishCoalescingcheckmsg);
    } else {
        if (myresult > 0) {
            ispositive = true;
        } else if (myresult < 0) {
            ispositive = false;
        } else {
            iszero = true;
        }

        if (Number.isInteger(myresult)) {
            summarymessage = "The result shows integer number";
            iseven = (myresult % 2 === 0);

            if (!iszero || ispositive) {
                if (ispositive && iseven) {
                    summarymessage += ", positive and even.";
                }

                if (ispositive && !iseven) {
                    summarymessage += ", positive and odd.";
                }

                if (!ispositive && iseven) {
                    summarymessage += ", negative and even.";
                }

                if (!ispositive && !iseven) {
                    summarymessage += ", negative and odd.";
                }
            }
        } else {
            // using Ternary here
            summarymessage = "The result shows floating number, and it is " + (ispositive ? "positive." : "negative.");
        }

        console.log(summarymessage);
    }
    /* Objective 4: Data Type Analysis & Conditional Output */


    /* Objective 5: Exit Mechanism (Loops & Conditionals) */
    console.log("");
    again = prompt("Do it again? Type 'no' to exit: ");
    console.log("");

    if (again === "no") {
        break;
    }
    /* Objective 5: Exit Mechanism (Loops & Conditionals) */
}
/* Objective 3: Main Calculator Logic (Switch & If/Else) */
