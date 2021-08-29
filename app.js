let firstNum = '';
let secondNum = '';
let currentNum = '';
let operand = '';
let solution = '';

const display = document.querySelector('.display');

//function operate that takes an operator and 2 numbers and then calls one of the above functions on the number

//function to add
function toAdd (num1,num2){
    return solution = (num1+num2);
}

//function to subtract
function toMinus (num1,num2){
    return solution = (num1-num2);
    
}

//function to multiply
function toMultiply (num1,num2){
    return solution = (num1*num2);
}

//function to divide

function toDivide (num1,num2){
   return solution = (num1/num2);
}


function operateNum (operator, num1, num2) {
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
            toDivide(num1,num2);
            display.textContent = solution;
            firstNum = solution;
            secondNum = '';
            break;
    }
}


function toClear() {
    firstNum = '';
    secondNum = '';
    operand = '';
    solution = '';
    display.textContent = 0;
}




function toEqual(){
    let num1 = parseFloat(firstNum);
    let num2 = parseFloat(secondNum);
    operateNum(operand,num1,num2);
    

}
//clear function 




function selectNumber (value) {
    if (value === '.' && firstNum.includes('.') && secondNum.includes('.')) return
  
    if (operand == '' && secondNum == ''){
        firstNum = firstNum + value;
        currentNum = firstNum;
    }
    
    

    if (operand != '' && firstNum != '') {
        secondNum = secondNum + value;
        currentNum = secondNum;
    }
    
 
    


}




function displayValue () {    
    display.textContent = currentNum;



    }

function selectOperator(value) {
    
    operand = value;
    
    if (operand != '' && firstNum != '' && secondNum != ''){
        toEqual(value);
    }
        
    

}
//addeventlisteners for each button clicked
//calls displayvalue 

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

const equal = document.querySelector('.equal');
equal.addEventListener('click', () => toEqual());

// --------------------// --------------------// --------------------// --------------------// --------------------



const clear = document.querySelector('.clear');
clear.addEventListener('click', () => toClear());

// const decimal = document.querySelector('.decimal');
// decimal.addEventListener('click', () => selectNumber(decimal.textContent));
