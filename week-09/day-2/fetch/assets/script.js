'use strict';

window.onload = () => {
  const thisButton = document.querySelector('button');
  const url = 'http://localhost:3000/api/joke';

  thisButton.addEventListener('click', (event) => {
    fetch(url)
    .then( res => res.json())
    .then( resp => {
      document.querySelector('p').innerHTML = resp.value.joke;
    } )
  })
}