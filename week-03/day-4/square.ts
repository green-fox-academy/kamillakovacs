'use strict';
export{}

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

function recursiveSquare(size: number, distance:number) {
  
  if (size > 0) {
    let x: number = canvas.width / 2 - size / 2;
    let y: number = canvas.height / 2 - size / 2;
    ctx.strokeRect(x, y, size, size);
    recursiveSquare(size - distance, distance - 25);
  }
}

recursiveSquare(canvas.width, 100);