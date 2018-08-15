// Write a function that takes a filename as string,
// open and read it. The file data represents a tic-tac-toe
// game result. Return 'X'/'O'/'draw' based on which player
// has winning situation.
// Make sure you have the 3 source files given to you on your computer

declare function require(path: string): any;

'use strict';
export { };

const fs = require('fs');
const charEncoding = 'utf-8';

function ticTacResult(fileName) {
  let xList: string[] = [];
  let oList: string[] = [];
  let fileContent = fs.readFileSync(fileName, charEncoding).split('');
  fileContent.forEach(element => {
    if (element === 'X') {
      xList.push(element);
    } else if (element === 'O') {
      oList.push(element);
    };
    
  });
  if (xList.length > oList.length) {
    return 'X';
  } else if (xList.length < oList.length) {
    return 'O';
  } else if (xList.length === oList.length) {
    return 'draw';
  }
}


console.log(ticTacResult('win-o.txt'))
// should print O
console.log(ticTacResult('win-x.txt'))
// should print X
console.log(ticTacResult('draw.txt'))
// should print draw
