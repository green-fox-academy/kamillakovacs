'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Draw four different size and color rectangles.
// Avoid code duplication.

let colors: string[] = ['blue', 'yellow', 'red', 'green'];

function rectangleLoop(x, y) {
    for(let i = 0; i < 4; i++) {
        ctx.beginPath();
        ctx.fillStyle = colors[i];
        ctx.fillRect(x, y, 100, 200);
        x = x + 120;
        ctx.fill();
    };
};

rectangleLoop(50, 100);
