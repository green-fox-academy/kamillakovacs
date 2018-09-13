'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  let name = req.query.name;
  res.render('home', {
    title: 'Home Page',
    name: (name) ? (name) : 'Guest',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
