'use strict'

const express = require('express');
const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('home', {
    title: 'Home Page',
    header: 'Green Fox Academy',
  });
});

app.get('/products/:id', (req, res) => {
  console.log(req.query);
  console.log(req.query.fox);
  res.render('home', {
    title: 'Product Page',
    header: req.params.id,
    withGoodbye: req.query.withGoodbye === 'true',
  });
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
});
