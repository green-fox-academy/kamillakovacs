'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Fill the canvas with a checkerboard pattern.

function checker(x, y) {
    let squareSize = 50;
    for(let i = 0; i < canvas.width; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.fillRect(x, y, squareSize, squareSize);
        ctx.fill();
        x = x + squareSize * 2;
        if(x === canvas.width) {
            x = squareSize;
            y = y + squareSize;
        } else if (x === canvas.width + squareSize) {
            x = 0;
            y = y + squareSize;
        };
    };
};

checker(0, 0); 