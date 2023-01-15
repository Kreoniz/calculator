function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b == 0) return snarkyErrorMessage;
    return a / b;
}

function operate(operator, firstNumber, secondNumber) {
    switch (operator) {
        case "+":
            return add(firstNumber, secondNumber);
        case "-":
            return subtract(firstNumber, secondNumber);
        case "*":
            return multiply(firstNumber, secondNumber);
        case "/":
            return divide(firstNumber, secondNumber);
    }
}

let displayValue = "";
let value = 0;
let operation = "";

const snarkyErrorMessage = "Weirdo...";

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.querySelector(".equal");
const clearButton = document.querySelector(".clear");

digitButtons.forEach(digit => {
    digit.addEventListener("click", e => {
        displayValue = +(displayValue + e.currentTarget.textContent);
        display.textContent = displayValue;
    });
});

operatorButtons.forEach(operator => {
    operator.addEventListener("click", e => {
        if (value == snarkyErrorMessage) value = 0;

        if (operation && Number.isFinite(displayValue)) { 
            value = operate(operation, +value, +displayValue);
            display.textContent = value;
            displayValue = "";
        } else if (Number.isFinite(displayValue)) {
            value = +displayValue;
            displayValue = "";
        }
        operation = e.currentTarget.textContent;
    });
});

equalButton.addEventListener("click", e => {
    if (value == snarkyErrorMessage) value = 0;

    if (operation && Number.isFinite(displayValue)) { 
        value = operate(operation, +value, +displayValue);
        display.textContent = value;
        displayValue = "";
    } else if (Number.isFinite(displayValue)) {
        value = +displayValue;
        displayValue = "";
    }
    operation = "";
});

clearButton.addEventListener("click", e => {
    displayValue = "";
    value = 0;
    operation = "";
    display.textContent = value;
});
