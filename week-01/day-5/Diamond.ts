export{}

'use strict';

let lineCount: number = 9;

let a: string = " "+lineCount;
let b: string = "*";

for (let i = 1; i < lineCount - 3; i++) {
    console.log(a + b);
    a = a.slice(0, -1);
    b += '**';
}
for (let i = 1; i < lineCount - 2; i++) {
    console.log(a + b);
    b = b.slice(0, -2);
    a += ' ';
}

// Write a program that draws a
// diamond like this:
//
//    *
//   ***
//  *****
// *******
//  *****
//   ***
//    *
//
// The diamond should have as many lines as lineCount is