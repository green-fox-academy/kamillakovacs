'use strict'

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (req, res) => {
  let thisNumber = req.query.input;
  if (req.query.input) {
    res.json({ 
      received: thisNumber,
      result: thisNumber * 2,
    });
  } else {
    res.json({ error: "Please provide an input!"}) 
  }  
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})