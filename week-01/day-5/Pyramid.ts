'use strict';

let lineCount: number = 4;
let a = 1;
let b = '*'
let c = '   ';

for (a = 1; a < 5; a++) {
    console.log(c + b);
    b += '**';
    c = c.slice(0, -1);
}

// Write a program that draws a
// pyramid like this:
//
//    *
//   ***
//  *****
// *******
//
// The pyramid should have as many lines as lineCount is