'use strict';

window.onload = () => {
  const mainContent = document.querySelector('#container');
  
  const getRandomDiv = () => {
    return Math.floor(Math.random() * 15);
  }

  const getRandomColor = () => {
    return Math.floor(Math.random() * 255);
  }

  const getThisColor = () => {
    return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  };

  const scrollThreshold = 300;

  const createDiv = () => {
    for (let i = 0; i < getRandomDiv(); i++) {
      let newDiv = document.createElement('div');
      mainContent.appendChild(newDiv);
      newDiv.classList.add('item');
      newDiv.style.backgroundColor = getThisColor();
    };
  };

  createDiv();
  
  document.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollThreshold) {
      createDiv();
    }
  })
};


