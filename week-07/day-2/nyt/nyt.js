'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const fetch = require('node-fetch');

app.use('/assets', express.static('assets'));

app.get('/api/nyt/', (req, res) => {
  let url = [
    'http://api.nytimes.com/svc/search/v2/articlesearch.json',
    `?q=romney&facet_field=day_of_week&begin_date=20120101&end_date=20120101`,
    `&api-key=b9827576536f42d89976abc25dd147e5`,
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
