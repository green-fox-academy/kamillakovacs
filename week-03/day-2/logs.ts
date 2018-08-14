
// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.

declare function require(path: string): any;

'use strict';
export { };

const fs = require('fs');
const charEncoding = 'utf-8';

function readIP(fileName) {
  let newList: string[] = [];
  fs.readFileSync(fileName, charEncoding).split('\n').forEach(elem => {
    newList.push(elem.split('  ')[2]);
  });
  console.log(newList);
};
readIP('log.txt');

function readGetPost(fileName) {
  let newArray: string[] = [];
  fs.readFileSync(fileName, charEncoding).split('\n').forEach(elem => {
    newArray.push(elem.split('  '));
  });
  console.log(newArray);
};
readGetPost('log.txt');