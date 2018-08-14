// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

declare function require(path:string): any;

'use strict';
export {};

let fs = require('fs');
const charEncoding = 'utf-8';

function numberOfLines(fileName: string): any {
    try {
        fs.existsSync(fileName, charEncoding);
        let result = fs.readFileSync(fileName, charEncoding).split('\n');
        console.log(result.length);
    } catch (e) {
        console.log('0');
    }
}

numberOfLines('my-file.txt');