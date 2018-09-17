const picture = [
  { URL: './jet-set-anthony-bourdain-travel-02.jpg', name: 'Anthony Bourdain', quote: 'Vegetarians, and their Hezbollah-like splinter faction, the vegans ... are the enemy of everything good and decent in the human spirit.'},
  { URL: './40f6124eb74aa98780d2bd1b7bb8d4f5--challenger-hellcat-joe-rogan.png', name: 'Joe Rogan', quote: 'If you ever start taking things too seriously, just remember that we are talking monkeys on an organic spaceship flying through the universe.'},
  { URL: './00-Ali-Wong.jpg', name: 'Ali Wong', quote: 'I joined a mom’s group in Los Angeles. Yeah, I don’t find any of these bitches particularly interesting or fun, but when you’re a new mom on maternity leave, it’s like The Walking Dead - you just gotta hook up with a crew to survive.'},
  { URL: './giphy.gif', name: 'Dave Chappelle', quote: "I think every group of brothers should have at least one white guy in it, for safety. Because when the shit goes down, somebody's gonna need to talk to the police."},
  { URL: './louis-ck-black-and-white-mic-comeback.png', name: 'Louis CK', quote: "If you're a woman and a guy's ever said anything romantic to you, he just left off the second part that would have made you sick if you could have heard it."},
];

let rightButton = document.querySelector('.buttonright');
let leftButton = document.querySelector('.buttonleft');
let counter = 0;
document.querySelector('.picture').src = picture[0].URL
document.querySelector('.name').innerHTML = picture[0].name; 
document.querySelector('.quote').innerHTML = picture[0].quote; 

rightButton.addEventListener('click', () => {
  counter++;
  if (counter === picture.length) {
    counter = 0;
    } 
  document.querySelector('.picture').src = picture[counter].URL;  
  document.querySelector('.name').innerHTML = picture[counter].name; 
  document.querySelector('.quote').innerHTML = picture[counter].quote; 
  }
);

leftButton.addEventListener('click', () => {
  counter--;
  if (counter === -1) {
    counter = picture.length - 1;
    } 
  document.querySelector('.picture').src = picture[counter].URL;
  document.querySelector('.name').innerHTML = picture[counter].name; 
  document.querySelector('.quote').innerHTML = picture[counter].quote; 
  }
  
);
