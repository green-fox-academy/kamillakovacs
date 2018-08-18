'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number;
let y: number;
let xWidth: number;
let yWidth: number;

function triangles(x, y, xWidth, yWidth) {
  ctx.beginPath();
  ctx.save();
  ctx.moveTo(x, y);
  ctx.lineTo(x-xWidth, y-yWidth);
  ctx.lineTo(x+xWidth, y-yWidth);
  ctx.lineTo(x, y);  
  ctx.stroke();

  if(y < 300) {
    ctx.restore();
    return null;
    } 

  triangles(x + xWidth, y-yWidth, xWidth, yWidth);
  triangles(x - xWidth, y-yWidth, xWidth, yWidth);
  ctx.restore();
};

triangles(300, 580, 6, 9);