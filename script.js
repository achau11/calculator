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

// const calculator = document.querySelector('.calculator');
// function createButtons(){
//     const btn = document.createElement('button');
//     for (i=9; i>=0; i--){
//         btn.textContent = '' +i;
//         calculator.appendChild(btn);
//     }
//     btn.c
    
// }
// createButtons();