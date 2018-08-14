// Create a function that takes a number
// divides ten with it,
// and prints the result.
// It should print 'fail' if the parameter is 0

declare function require(path:string): any;

'use strict';
export {};

let myNumber = 0;
function divide(newNumber: number): number {
    if (newNumber === 0) {
        throw new TypeError('fail');
    }
    return 10 / newNumber;
};

try {
    console.log(divide(myNumber));
} catch(err) {
    console.log(err.message);
};