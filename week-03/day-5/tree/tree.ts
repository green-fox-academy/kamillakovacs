'use strict';

const canvas = document.querySelector('.main-canvas') as HTMLCanvasElement;
const ctx = canvas.getContext('2d');

ctx.fillStyle = 'rgb(0, 49, 65)';
ctx.fillRect(0, 0, 600, 600);
ctx.strokeStyle = 'yellow';

function tree(x, y, armLength, angle) {
  ctx.beginPath();
  ctx.save();

  ctx.translate(x, y);
  ctx.rotate(angle * Math.PI / 180);
  ctx.moveTo(0, 0);
  ctx.lineTo(0, -armLength);
  ctx.stroke();

  if (armLength < 10) {
    ctx.restore();
    return null;
  }

  tree(0, -armLength, armLength * .78, 25);
  tree(0, -armLength, armLength * .78, -25);
  tree(0, -armLength, armLength * .78, 0);

  ctx.restore();
}

tree(300, 500, 80, 0)