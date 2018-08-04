export{}

let lineCount: number = 6;
let columnCount: number = 5;
let space1: string = '';
let space2: string = '%  ';
let print: string = '';


for(let i = 1; i <= lineCount; i++) {
    if(i == 1 || i == lineCount) {
        let repeated = (str, num) => num === undefined? str.repeat(1): str.repeat(num);
        console.log(repeated('%', columnCount)); 
    } else {
            console.log('%' + space1 + space2 + '%');
            space1 += ' ';
            space2 = space2.slice(0, -1);
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