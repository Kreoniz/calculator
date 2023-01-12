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

const display = document.querySelector("#display");
const digitButtons = document.querySelectorAll(".digit");

digitButtons.forEach(digit => {
    digit.addEventListener("click", e => {
        displayValue += e.currentTarget.textContent;
        display.textContent = displayValue;
    });
});
