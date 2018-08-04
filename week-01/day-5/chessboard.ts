
'use strict';

export{}

let rows: number = 8;
let checkSquares: string = "% % % % "
let space: string = " "

for(let x = 1; x < rows+1; x++) {
    if(x % 2 == 0) {
        console.log(space + checkSquares);
    } else {
        console.log(checkSquares);
    }
}

// Create a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//