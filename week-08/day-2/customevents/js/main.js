'use strict';

let leftColumn = document.querySelector('.one');
let rightColumn = document.querySelector('.two');

const getRandom = () => {
  return Math.floor(Math.random() * 255);
}

const getRandomColor = () => {
  return `rgb(${getRandom()},${getRandom()},${getRandom()})`;
};

const changeColor = (event) => {
  event.target.style.backgroundColor = getRandomColor();
};

leftColumn.addEventListener('click', changeColor);
rightColumn.addEventListener('click', changeColor);