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


