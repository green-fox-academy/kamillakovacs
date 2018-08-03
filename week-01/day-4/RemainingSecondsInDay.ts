'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentSecs = (currentHours*60**2) + (currentMinutes*60) + currentSeconds;
let remainingSeconds = 86400 - currentSecs;
console.log(remainingSeconds);

