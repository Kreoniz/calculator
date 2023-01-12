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

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");

digitButtons.forEach(digit => {
    digit.addEventListener("click", e => {
        displayValue += e.currentTarget.textContent;
        display.textContent = displayValue;
    });
});

operatorButtons.forEach(operator => {
    operator.addEventListener("click", e => {
        if (operation) {
            value = operate(operation, value, displayValue);
            display.textContent = value;
            displayValue = "";
        } else {
            value = +displayValue;
            displayValue = "";
        }
        operation = e.currentTarget.textContent;
    });
});
