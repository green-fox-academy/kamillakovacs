'use strict';

window.onload = () => {
  const thisButton = document.querySelector('button');
  const url = 'http://localhost:3000/api/joke';
  const div = document.querySelector('div');

  thisButton.addEventListener('click', () => {
    fetch(url)
    .then( res => res.json())
    .then( resp => {
      let thisP = document.createElement('p');
      div.appendChild(thisP);
      thisP.innerHTML = resp.value.joke;
    } )
  })
}