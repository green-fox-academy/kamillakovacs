'use strict';

export{}

let lineCount: number = 6;
let columnCount: number = 5;
let percent: string = '%';
let print: string = ' ';

for(let a = 1; a < lineCount; a++) {
    print = '';
        if(a == 1 || a == lineCount) {
            for(let i: number = 0; i < columnCount; i++) {
                columnCount '%';
            }
        } else {console.log(a + (a.length - 1) + a);

        }
}



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