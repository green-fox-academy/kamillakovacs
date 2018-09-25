'use strict';

window.onload = () => {
  const mainContent = document.querySelector('#container');
  
  const getRandomDiv = () => {
    return Math.floor(Math.random() * 25);
  }

  const getRandomColor = () => {
    return Math.floor(Math.random() * 255);
  }

  const getThisColor = () => {
    return `rgb(${getRandomColor()},${getRandomColor()},${getRandomColor()})`;
  };

  const scrollThreshold = 300;

  const createBottomDiv = () => {
    for (let i = 0; i < getRandomDiv(); i++) {
      let newDiv = document.createElement('div');
      mainContent.appendChild(newDiv);
      newDiv.classList.add('item');
      newDiv.style.backgroundColor = getThisColor();
    };
  };

  const createTopDiv = () => {
    for (let i = 0; i < getRandomDiv(); i++) {
      let newDiv = document.createElement('div');
      mainContent.insertBefore(newDiv, mainContent.firstChild);
      newDiv.classList.add('item');
      newDiv.style.backgroundColor = getThisColor();
    };
  };

  createBottomDiv();
  
  document.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight - scrollThreshold) {
      createBottomDiv();
    }
  })

  document.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY <= scrollThreshold) {
      createTopDiv();
    }
  })

};


