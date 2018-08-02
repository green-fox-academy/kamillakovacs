'use strict';

let a: number = 24;
let out: number = 0;

if(a % 2 === 0) {
    out++;
}
// if a is even increment out by one
console.log(out);

let b: number = 15;
let out2: string = '';

if (b >= 10 && b <= 20) {
    out2 = 'Sweet!';
} else if (b < 10) {
    out2 = 'Less!';
} else if (b > 20) {
    out2 = 'More!';
}
console.log(out2);
// if b is between 10 and 20 set out2 to "Sweet!"
// if less than 10 set out2 to "Less!",
// if more than 20 set out2 to "More!"


let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus == 1 > 2) {
    c = c-2;
} else if (credits < 50 && isBonus == 1 > 2) {
    c++;
} else if (isBonus == 2 > 1) {
    c = c;
}

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
console.log(c);


let d: number =  8;
let time: number = 120;
let out3: string = '';

if (d % 4 == 0 && time <= 200) {
    out3 = 'check';
} else if (time > 200) {
    out3 = 'Time out';
} else out3 = 'Run Forest Run!';

// if d is dividable by 4
// and time is not more than 200
// set out3 to "check"
// if time is more than 200
// set out3 to "Time out"
// otherwise set out3 to "Run Forest Run!"
console.log(out3);

'use strict';

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let currentSecs = (currentHours*60**2) + (currentMinutes*60) + currentSeconds;
let remainingSeconds = 86400 - currentSecs;
console.log(remainingSeconds);

'use strict';

let i: number = 0;
for(i = 0; i < 100; i++) {
    console.log("I won't cheat on the exam!");
}


// Create a program that writes this line 100 times:
// "I won't cheat on the exam!"*/

