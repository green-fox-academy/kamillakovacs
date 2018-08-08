'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let color: string[] = ['red', 'purple', 'blue', 'green', 'yellow', 'orange', 'indigo']
let c: number = 0;
function rainbowbox(size, color) {
    for(let i = 0; i <= 40; i++) {
        if(c === color.length) {
            c = 0;
        }
        ctx.fillStyle = color[c];
        ctx.fillRect(canvas.width/2 - size/2, canvas.height/2 - size/2, size, size);
        size -= 10;
        c++;
    };
};

rainbowbox(canvas.height, color);



