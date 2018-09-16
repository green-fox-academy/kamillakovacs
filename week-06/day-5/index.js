'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

const picture = [
  { URL: '/assets/4-Nature-Wallpapers-2014-1_cDEviqY.jpg'},
  { URL: '/assets/HD-Nature-Photo-For-Mac.jpg'},
  { URL: 'assets/landscape-nature-flowers-355296.jpg'},
  { URL: '/assets/pexels-photo-257360.jpeg'},
  { URL: '/assets/pexels-photo-459225.jpeg'},
];

app.set('view engine', 'ejs');
app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.render('index', {
    picture: picture[0].URL,
  });


  let rightButton = document.querySelector('.buttonright');
  let counter = 0;
  rightButton.addEventListener('click', () => {
    console.log('right button was clicked');
    // res.render('index', {
    //   picture: picture[counter++].URl,
    // });  
    // if ( counter === picture.length) {
    //   counter = 0;
    // }
  }
);
})

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
