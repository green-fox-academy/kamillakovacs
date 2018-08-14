'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number = canvas.width / 2;
let y: number = 0;
let i: number;
let xWidth: number = 25; 
let yWidth: number = 20;

ctx.beginPath();
for(i = 1; i <= canvas.height; i++) {
    for(let a = 1; a <= i; a++) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + xWidth/2, y + yWidth);
        ctx.lineTo(x - xWidth/2, y + yWidth);
        ctx.lineTo(x, y);  
        x = x + xWidth;
    };
    x = x - xWidth/2 - (xWidth * i);
    y = y + yWidth;
};
ctx.stroke();
    

    
    