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
    res.json({ error: "Please provide an input!"}); 
  }  
});

app.get('/greeter/', (req, res) => {
  let studentName = req.query.name;
  let studentTitle = req.query.title;
  if (req.query.name && req.query.title) {
    res.json({
      welcome_message: `Oh, hi there ${studentName}, my dear student!`,
    });
  } else if (req.query.title) {
    res.json({ error: "Please provide a name!"});
  } else if (req.query.name) {
    res.json({ error: "Please provide a title!"});
  }
});

app.get('/appenda/{appendable}', (req, res) => {
  
})

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})