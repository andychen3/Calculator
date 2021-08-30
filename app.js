//variables
let firstNum = '';
let secondNum = '';
let currentNum = '';
let firstOperand = '';
let solution = '';
const display = document.querySelector('.display');
display.textContent = 0;


//function to add
function toAdd (num1,num2){
    return solution = Math.round((num1+num2)*1000)/1000;
}

//function to subtract
function toMinus (num1,num2){
    return solution = Math.round((num1-num2)*1000)/1000;   
}

//function to multiply
function toMultiply (num1,num2){
    return solution = Math.round((num1*num2)*1000)/1000;
}

//function to divide
function toDivide (num1,num2){
   return solution = Math.round((num1/num2)*1000)/1000;
}

//selecting which operator to use based on user input and spits out solution
function operateNum (operator, num1, num2) {
    if (isNaN(num1) || isNaN(num2)) return
    switch (operator){
        case '+':
            toAdd(num1,num2);
            display.textContent = solution;
            firstNum = solution;
            secondNum = '';
            break;
        case '-':
            toMinus(num1,num2);
            display.textContent = solution;
            firstNum = solution;
            secondNum = '';
            break;
        case '*':
            toMultiply(num1,num2);
            display.textContent = solution;
            firstNum = solution;
            secondNum = '';
            break;
        case '/':
            if (num2 === 0) {
                display.textContent = `You funny`;
                firstNum = null;
                secondNum = null;
            } 
            else { 
            toDivide(num1,num2);
            display.textContent = solution;
            firstNum = solution;
            secondNum = ''; }
            break;
    }
}

//clear function 
function toClear() {
    firstNum = '';
    secondNum = '';
    firstOperand = '';
    solution = '';
    display.textContent = 0;
}

//evaluating function that calls on the operating function to select which operator to perform
function toEqual(){
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    operateNum(firstOperand,num1,num2);
}

//user selects number
function selectNumber (value) {
    if (display.textContent == 0 && value == '.') {
        display.textContent = 0;  
        currentNum = display.textContent;
        firstNum = currentNum;
    } else if (value === '.' && display.textContent.includes('.')) return
        
   if (firstNum.length < 15){
        if (firstOperand == '' && secondNum == ''){
            firstNum = firstNum + value;
            currentNum = firstNum;
        }
    }
    
    if (secondNum.length < 15){
        if (firstOperand != '' && firstNum != null) {
            secondNum = secondNum + value;
            currentNum = secondNum;
        }
    }
}

//function to display the value on the screen
function displayValue () {    
    display.textContent = currentNum;
    }

//function to select operator
function selectOperator(value) {  
    if (firstOperand != '' && firstNum != '' && secondNum != ''){
        toEqual();
    }    
    firstOperand = value;  
}

//function to change the sign to positive or negative
function changeSign() {
      if (display.textContent != 0 && firstNum == currentNum) {
        firstNum = firstNum *-1;
        currentNum = firstNum;
        display.textContent = firstNum;
    } else if (display.textContent != 0 && secondNum == currentNum){
        secondNum = secondNum *-1;
        currentNum = secondNum;
        display.textContent = secondNum;
    }
}
  
//function to delete on number at a time.
function toDelete() {    
    if (display.textContent != 0 && firstNum == currentNum) {
        firstNum = firstNum.toString().slice(0,-1);
        currentNum = firstNum;
        display.textContent = firstNum;
    } else if (display.textContent != 0 && secondNum == currentNum){
        secondNum = secondNum.toString().slice(0,-1);
        currentNum = secondNum;
        display.textContent = secondNum;
    }
}
    
//evemtlistners for all the digits
const numbers = document.querySelectorAll('.digits');
    numbers.forEach((number) => {
        number.addEventListener('click', () => {
            selectNumber(number.textContent);
            displayValue();
        });
}); 

//addeventlistener for operators 
const operators = document.querySelectorAll('.operators');
operators.forEach((operate) => {
    operate.addEventListener('click', () => { 
        selectOperator(operate.textContent)
        currentNum = '';
    });
});

//addeventlistener for the equal sign
const equal = document.querySelector('.equal');
equal.addEventListener('click', () => toEqual());

//addeventlistener for clear
const clear = document.querySelector('.clear');
clear.addEventListener('click', () => toClear());

//addeventlistener for the postive and negative button
const positiveNegative = document.querySelector('.add-minus');
positiveNegative.addEventListener('click', () => changeSign());

//addeventlistener for the backspace button
const backSpace = document.querySelector('.back-space');
backSpace.addEventListener('click', () => toDelete());