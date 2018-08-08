'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The square size, and the fill color,
// and draws a square of that size and color to the center of the canvas.
// Create a loop that fills the canvas with rainbow colored squares.

let color: string[] = ['red', 'purple', 'blue', 'green', 'yellow', 'orange', 'indigo']
let c: number;

function rainbowbox(size, color) {
    ctx.fillStyle = color;
    ctx.fillRect(canvas.width/2 - size/2, canvas.height/2 - size/2, size, size);
};
    
for(let i = 400; i > 0; i -= 10) {
    rainbowbox(i, color[i % color.length])
};