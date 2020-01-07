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

function displayClick(btn){
    let display = document.querySelector('.displayScreen');
    displayVal += btn;
    display.textContent = displayVal;
}

let displayVal = '';
let seven = document.querySelector('#a');
seven.addEventListener('click', function(event){
    displayClick(event.target.textContent);
});
