'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number;
let y: number;
let width: number = canvas.width;
let height: number = canvas.height;

function yellowCarpet() {
  if (height === canvas.height / 50) {
    return null;
  } else {
    ctx.beginPath();
    ctx.moveTo(width / 3, 0);
    ctx.lineTo(width / 3, height);
    ctx.moveTo((width / 3) * 2, height);
    ctx.lineTo((width / 3) * 2, 0);


    ctx.moveTo(0, width / 3);
    ctx.lineTo(width, height / 3);
    ctx.moveTo(0, (height / 3) * 2);
    ctx.lineTo(width, (height / 3) * 2);
    ctx.stroke();

    yellowCarpet();
  }
}

yellowCarpet();