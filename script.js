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
function eventFunc (event){
    displayClick(event.target.textContent);
}
function displayClick(digit){
    let display = document.querySelector('.displayScreen');
    if (display.textContent.length < 15){
    displayVal += digit;
    display.textContent = displayVal;
    }
}

let displayVal = '';

const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', eventFunc);
});
