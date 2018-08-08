'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

// DO NOT TOUCH THE CODE ABOVE THIS LINE
// Create a line drawing function that takes 2 parameters:
// The x and y coordinates of the line's starting point
// and draws a line from that point to the center of the canvas
// Draw 3 lines with that function. Use loop for that.

function drawing(x, y) {
    for(let i = 0; i < 3; i++) {
        ctx.beginPath();
        ctx.moveTo(x, y); 
        ctx.lineTo(canvas.width / 2, canvas.height / 2);
        ctx.strokeStyle = "red";
        ctx.stroke();
    }
};

drawing(0, 300);
