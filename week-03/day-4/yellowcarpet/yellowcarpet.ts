'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

let x: number;
let y: number;
let width: number = canvas.width;
let height: number = canvas.height;

ctx.beginPath();
ctx.fillStyle = 'yellow';
ctx.fillRect(0, 0, canvas.width, canvas.height);


function yellowCarpet(xStart, yStart, move) {
  // if (height === canvas.height / 50) {
  //   return null;
  // } else {
      ctx.beginPath();
      ctx.moveTo(xStart, yStart);
      ctx.lineTo(xStart, yStart*canvas.height / 3);
      ctx.lineTo(width * (2/3), height / 3);
      ctx.lineTo(width * (2/3), 0);
      ctx.lineTo(width / 3, 0);
      ctx.strokeStyle = 'black'
      ctx.stroke();
      // ctx.moveTo(0, width / 3);
      // ctx.lineTo(width, height / 3);
      // ctx.moveTo(0, (height / 3) * 2);
      // ctx.lineTo(width, (height / 3) * 2);
      // ctx.stroke();
    // }

//   }

//   width = (width / 3);
//   height = height / 3;

}

yellowCarpet(width / 3, 0);