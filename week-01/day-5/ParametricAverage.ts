'use strict';
export{}

let number1: number = 5;
let number2: number = 4;
let number3: number = 4;
let number4: number = 4; 
let number5: number = 5;
let numberSum: number = number1+number2+number3+number4+number5;
let numberAverage: number = numberSum/number1;
let i = 0;

while (i < number1) {
    console.log('Please enter a number :')
    i++;
}

console.log("Sum: " + numberSum + ", Average: " + numberAverage);


// Write a program that asks for a number.
// It would ask this many times to enter an number,
// if all the numbers are entered, it should print the sum and average of these
// numbers like:
//
// Sum: 22, Average: 4.4