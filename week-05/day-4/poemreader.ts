'use strict'

export {};

declare function require(path:string): any;
const fs = require('fs');
const charEncoding = 'utf-8';

let newArray: string[] = [];

function readPoem() {
  let poem1 = fs.readFileSync(`poem.txt`, charEncoding);
  let regex = /[.,\s]/g;
  let newpoem = poem1.replace(regex, ' ');
  let splitString = newpoem.split(` `)
  for (let i: number = 0; i < splitString.length; i++) {
    if (splitString[i].length >= 8) {
    newArray.push(splitString[i])
    }
  }
  return newArray;
};

console.log(readPoem());
