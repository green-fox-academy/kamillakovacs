// Write a program that opens a file called 'my-file.txt', then prints
// each of lines form the file.
// If the program is unable to read the file (for example it does not exists),
// then it should print an error message like: 'Unable to read file: my-file.txt'

declare function require(path:string): any;

'use strict';
export {};

let fs = require('fs');
const charEncoding = 'utf-8';

function readFromFile(fileName: string) {
   // const fileContent: string = readFromFile('my-file.txt');
   // if (fileContent !== null) {
   //     throw new TypeError('Unable to read file: my-file.txt');
   // }

    try {
        if(fs.existsSync(fileName, charEncoding)) {
            let result = fs.readFileSync(fileName, charEncoding)
            console.log(result.split('\n'))
        } else {
            throw new Error('Unable to read file: my-file.txt');
        }
            
    } catch (e) {
        console.log(e.message);
    }
}

readFromFile('my-file.txt');

//fs.readFile('my-file.txt', charEncoding, function(err, data) {
//    console.log(data);
//});