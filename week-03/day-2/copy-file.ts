// Write a function that copies a file to an other
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

declare function require(path: string): any;

'use strict';
export { };

const fs = require('fs');
const charEncoding = 'utf-8';

function copies(file1: string, file2: string): any {
    let fileContent = fs.readFileSync(file1, charEncoding);
    fs.writeFileSync(file2, fileContent);
    if (fs.readFileSync(file1, charEncoding) === fs.readFileSync(file2, charEncoding)) {
      return true;
    } else {
      return false;
    }
};

console.log(copies('kamilla2.txt', 'text2.txt'));