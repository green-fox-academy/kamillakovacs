'use strict';

// Write a function that joins two array by matching one girl with one boy in a new array
// Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]
let girls: string[] = ['Eve', 'Ashley', 'Claire', 'Kat', 'Jane', 'Bori', 'Teri', 'magi', 'kamilla'];
let boys: string[] = ['Joe', 'Fred', 'Tom', 'Todd', 'Neef'];

function makingMatches(array1, array2) {
    let ret = [];
    array1.forEach((elem, index) => {
        ret.push(elem);
        if(array2[index] != undefined) {
            ret.push(array2[index]);
        }
    });
    return ret;
}

console.log(makingMatches(girls, boys));

export = makingMatches;