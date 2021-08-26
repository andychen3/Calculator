//function to add
function toAdd (num1,num2){
    console.log(num1+num2);
    // return num1 + num2;
}



//function to subtract
function toMinus (num1,num2){
    console.log(num1-num2);
    // return num1 - num2;
    
}




//function to multiply
function toMultiply (num1,num2){
    console.log(num1*num2);
    // return num1*num2;
}



//function to divide

function toDivide (num1,num2){
   console.log(num1/num2);
    // return num1 / num2;
}



//function operate that takes an operator and 2 numbers and then calls one of the above functions on the number

function operate (operator, num1, num2) {
    switch (operator){
        case '+':
            toAdd(num1,num2);
            break;
        case '-':
            toMinus(num1,num2);
            break;
        case '*':
            toMultiply(num1,num2);
            break;
        case '/':
            toDivide(num1,num2);
            break;
    }
}

operate('*',2,2);


//function that populate the display when you click number buttons and storing the display value in a variable somewhere for use later

//probably define a global variable that is passed something in this function


//addeventlisteners for each button clicked

//probably store the numbers in an object