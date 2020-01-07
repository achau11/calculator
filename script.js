// Math functions
function add(num1, num2) {
    return num1 + num2;
}
function substract (num1, num2) {
    return num1 - num2;
}
function multiply (num1, num2) {
    return num1 * num2;
}
function divide (num1, num2) {
    return num1 / num2;
}
// Operate function takes two nums and finds the suitable function for operation
function operate (operator, num1, num2){
    switch (operator){
        case '+':
            return add(num1, num2);
        case '-':
            return substract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);   
    }
}
// function calls displayClick function on digit returned from button click
function eventFunc (event){
    displayClick(event.target.textContent);
}
// displays clicked button on the calculator screen.
function displayClick(digit){
    let display = document.querySelector('.displayScreen');
    if (display.textContent.length < 15){
    displayVal += digit;
    display.textContent = displayVal;
    }
}

// script start
let displayVal = '';

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', eventFunc);
});

const operatorBtns = document.querySelectorAll('.operator');
operatorBtns.forEach(btn => {
    btn.addEventListener('click', event => {
        event.target.style.backgroundColor = 'rgb(192, 108, 108)';
        // remove event handler from rest of .operators
        // return which event handler clicked.
    });
});

// take the displayScreen text content convert it into number
// make variable to store that number
// reset the screen 
// display another number, store it another variable
// take operator
// call operate function 
// display the results in display window.