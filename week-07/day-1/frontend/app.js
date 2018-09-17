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

app.get('/appenda/:word', (req, res) => {
  let appendableText = req.params.word;
  if (req.params.word) {
    res.json({
      appended: `${appendableText}a`,
    });
  } else {
    res.status(404).json({
      error: `Please provide a word to append silly person.`
    });
  };
});

function refactorio(n) {
  if (n === 1) {
    return 1;
   } else {
    return n * refactorio(n - 1);
   }
}

function countDown(x) {
  if (x < 1) {
    throw new Error("Cannot use negative numbers");
  } else if (x === 1) {
    return 1;
  } else {
    return x + countDown(x - 1);
  };
};

app.post('/dountil/:action', jsonParser, (req, res) => {
  let inputNumber = req.body.until;
  if (req.params.action === `sum`) {
    res.json({
      result: countDown(inputNumber),
    });
  } else if (req.params.action === `factor`) {
    res.json({
      result: refactorio(inputNumber),
    });
  } else {
    res.json({ error: "Please provide a number!" });
  };
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})