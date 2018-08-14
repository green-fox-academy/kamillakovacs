// Create a function that takes 3 parameters: a path, a word and a number,
// than it should write to a file.
// The path parameter should be a string, that describes the location of the file.
// The word parameter should be a string, that will be written to the file as lines
// The number paramter should describe how many lines the file should have.
// So if the word is 'apple' and the number is 5, than it should write 5 lines
// to the file and each line should be 'apple'
// The function should not raise any error if it could not write the file.

declare function require(path:string): any;

'use strict';
export {};

const fs = require('fs');
const charEncoding = 'utf-8';

function huha(path: string, word: string, numero: number): void {
    try {
        fs.writeFileSync(path, word + '\n');
        for(let i = 1; i < numero; i++) {
            fs.appendFileSync(path, word + '\n');
        }; 
    } catch {
        return null;
    };
};

huha('myfile5.txt','apple', 5);