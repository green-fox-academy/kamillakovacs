// Open a file called 'my-file.txt'
// Write your name in it as a single line
// If the program is unable to write the file,
// then it should print an error message like: 'Unable to write file: my-file.txt'

declare function require(path:string): any;

'use strict';
export {};

const fs = require('fs');
const charEncoding = 'utf-8';

function writeToAFile(fileName: string, data: any): void {
    try {
        fs.writeFileSync(fileName, data);
    } catch {
        console.log('Unable to write file: kamilla2.txt');
    };
};

writeToAFile('kamilla2.txt', 'Kamilla');
