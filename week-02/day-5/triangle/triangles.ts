'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x = canvas.width / 2;
let y = 0;
let i = 1

ctx.beginPath();
for(i = 1; i <= canvas.height; i++) {
    for(let a = 1; a <= i; a++) {
        ctx.moveTo(x, y);
        ctx.lineTo(x + 10, y + 15);
        ctx.lineTo(x - 10, y + 15);
        ctx.lineTo(x, y);  
        x = x + 20;
    };
    x = x - 10 - (20 * i);
    y = y + 15;
};
ctx.stroke();
    

    
    
    
    /*
    x = x - 10;
    y = y + 15;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x - 10, y + 15);
    ctx.lineTo(x, y);
    x = x + 20;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x - 10, y + 15);
    ctx.lineTo(x, y);
    x = x - 30;
    y = y + 15;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x - 10, y + 15);
    ctx.lineTo(x, y);
    x = x + 20;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x - 10, y + 15);
    ctx.lineTo(x, y);
    x = x + 20;
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x - 10, y + 15);
    ctx.lineTo(x, y);
    x = x - 50;
    y = y + 15;
    };

ctx.stroke();

function oneTriangle() {
    ctx.moveTo(x, y);
    ctx.lineTo(x + 10, y + 15);
    ctx.lineTo(x - 10, y + 15);
    ctx.lineTo(x, y);
};

function jumpDown() {
    for(let a = 1; a < canvas.height; a++) {
        x = x - (10 + 20*a)
        y = y + 15;
    }

function jumpRight() {
    x = x + 20;
}
*/

/*
let a = 1; 
function goAway(a) {
    
    a++;
};

ctx.moveTo(x, y);
ctx.lineTo(x + 10, y + 15);
ctx.lineTo(x - 10, y + 15);
ctx.lineTo(x, y);
x = x - 10;
y = y + 15;
ctx.moveTo(x, y);
ctx.lineTo(x + 10, y + 15);
ctx.lineTo(x - 10, y + 15);
ctx.lineTo(x, y);
x = x + 20;
ctx.moveTo(x, y);
ctx.lineTo(x + 10, y + 15);
ctx.lineTo(x - 10, y + 15);
ctx.lineTo(x, y);
ctx.stroke();
*/
