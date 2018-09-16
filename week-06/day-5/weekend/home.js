const picture = [
  { URL: './4-Nature-Wallpapers-2014-1_cDEviqY.jpg'},
  { URL: './HD-Nature-Photo-For-Mac.jpg'},
  { URL: './landscape-nature-flowers-355296.jpg'},
  { URL: './pexels-photo-257360.jpeg'},
  { URL: './pexels-photo-459225.jpeg'},
];

let rightButton = document.querySelector('.buttonright');
let counter = 1;
document.querySelector('.picture').src = picture[0].URL

rightButton.addEventListener('click', () => {
  console.log('right button was clicked');
  document.querySelector('.picture').src = picture[counter++].URL;
  if (counter === picture.length) {
    counter = 0;
  } 
  }
);
