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
  
  ctx.translate(x, y);
  ctx.moveTo(0, 0);
  ctx.lineTo(0-xWidth, 0-yWidth);
  ctx.lineTo(0+xWidth, 0-yWidth);
  ctx.lineTo(0, 0);  
  ctx.stroke();

  if(y < 400) {
    ctx.restore();
    return null;
    } 

  triangles(x + xWidth, y-yWidth, xWidth, yWidth);
  triangles(x - xWidth, y-yWidth, xWidth, yWidth);
  ctx.restore();
};

triangles(300, 580, 4, 6);