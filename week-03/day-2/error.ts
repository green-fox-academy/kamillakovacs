/*function division(a: number, b: number): number {
    if(b === 0) {
        throw new TypeError('Cant divide by zero');
    }
    return a / b;
};

try {
	console.log(division(1,2));
} catch(err) {
	console.log(err.message);
} finally {
    console.log('alma');
}
*/

declare function require(path:string): any;

'use strict';
export {};

const fs = require('fs');

const charEncoding = 'utf-8';

function readFromFile(fileName: string): string {
    try {
        return fs.readFileSync(fileName, charEncoding);
    } catch (e) {
        console.log(e.message);
        return null; 
    }
}

function writeToAFile(fileName: string, data: string): void {
    fs.writeFileSync(fileName, data);
}

fs.readFile('hello.txt', charEncoding, function(err, data) {
    console.log(data);
});

console.log('123');

function countA() {
    const fileContent: string = readFromFile('hello.txt');
    console.log(fileContent);
}


writeToAFile('hell.txt', 'hello coffee');

console.log(readFromFile('hello.txt'));

