'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const fetch = require('node-fetch');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/api/giphy/', (req, res) => {
  let url = [
    'https://api.giphy.com/v1/gifs/search',
    `?api_key=8zlJLJgPG8RMMWFNtllRrrWTFEBktjh0`,
    `&q=kitten&limit:16`,
  ].join('');

  fetch(url)
  .then((resp) => (resp.json()))
  .then(response => {
    res.json(response);
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});
