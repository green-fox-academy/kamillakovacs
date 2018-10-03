'use strict'

window.onload = () => {
  const thisQuestion = document.querySelector('.this-question');
  const url = "http://localhost:3000/questioning";

  fetch(url)
    .then( res => res.json())
    .then( resp => {
      console.log(resp.result);
      setInterval(() => {
        resp.result.forEach(element => {
            thisQuestion.textContent = element.question;
        })
      }, 5000);
        
    })
  

}