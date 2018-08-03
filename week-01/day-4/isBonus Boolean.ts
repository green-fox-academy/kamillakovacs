let c: number = 123;
let credits: number = 100;
let isBonus: boolean = false;

if (credits >= 50 && isBonus == 1 > 2) {
    c = c-2;
} else if (credits < 50 && isBonus == 1 > 2) {
    c = c-1;
} else if (isBonus == 2 > 1) {
    c = c;
}

// if credits are at least 50,
// and is_bonus is false decrement c by 2
// if credits are smaller than 50,
// and is_bonus is false decrement c by 1
// if is_bonus is true c should remain the same
console.log(c);


