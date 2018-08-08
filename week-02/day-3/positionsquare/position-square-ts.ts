'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a square drawing function that takes 2 parameters:
// The x and y coordinates of the square's top left corner
// and draws a 50x50 square from that point.
// Draw 3 squares with that function.
// Avoid code duplication.


function square(x, y) {
    for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'blue';
        ctx.fillRect(x, y, 50, 50);
        x = x + 100;
        y = y + 100;
        ctx.fill();
    };
};

square(20, 20);