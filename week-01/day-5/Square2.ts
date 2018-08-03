'use strict';

let lineCount: number = 6;
let a: string = '%';
let b: string = ' ';

for(let Counter = 1; Counter < lineCount; Counter++) {
    if(Counter == 1 || Counter == 6) {
        console.log(a + a + a + a + a);
    } else {console.log(a + (a.length - 1) + a);

    }
}

aaaaa
aabba
ababa
abbaa
abbba
aaaaa


// Write a program that draws a
// square like this:
//
// %%%%%
// %%  %
// % % %
// %  %%
// %   %
// %%%%%
//
// The square should have as many lines as lineCount is