
'use strict';

let lineCount: number = 6;
let Percentage: string = "%"

console.log(Percentage + Percentage + Percentage + Percentage + Percentage);
for(let Counter = 0; Counter < lineCount-2; Counter++) {
    console.log(Percentage + '   ' + Percentage);
}
console.log(Percentage + Percentage + Percentage + Percentage + Percentage);

// Write a program that draws a square like this:
//
// %%%%%%
// %    %
// %    %
// %    %
// %    %
// %%%%%%
//
// The square should have as many lines as lineCount is