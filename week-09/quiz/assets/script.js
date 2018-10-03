'use strict'

window.onload = () => {
  const thisQuestion = document.querySelector('.this-question');
  const url = "http://localhost:3000/game";
  let answer1 = document.querySelector('.q1');
  let answer2 = document.querySelector('.q2');
  let answer3 = document.querySelector('.q3');
  let answer4 = document.querySelector('.q4');

  fetch(url)
    .then( res => res.json())
    .then( resp => {
      thisQuestion.textContent = resp.question;
      answer1.textContent = resp.answers[0].answer;
      answer2.textContent = resp.answers[1].answer;
      answer3.textContent = resp.answers[2].answer;
      answer4.textContent = resp.answers[3].answer;
    })

  setInterval(() => {
  fetch(url)
    .then( res => res.json())
    .then( resp => {
      console.log(resp);
      let i = 1;
      answer1.textContent = resp.answers[0].answer;
      answer2.textContent = resp.answers[1].answer;
      answer3.textContent = resp.answers[2].answer;
      answer4.textContent = resp.answers[3].answer;
        
      thisQuestion.textContent = resp.question;
      answer1.textContent = resp.answers[0].answer;
      answer2.textContent = resp.answers[1].answer;
      answer3.textContent = resp.answers[2].answer;
      answer4.textContent = resp.answers[3].answer;
      i++;
    })
  }, 10000);
}