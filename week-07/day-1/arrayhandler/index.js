'use strict'

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

let thisArray = [1, 2, 5, 10];

app.use('/assets', express.static('assets'));

function multiply (myArray) {
  return myArray.reduce((a, b) => a * b);
} 

function sum (myArray) {
  return myArray.reduce((a, b) => a + b);
} 

function double (myArray) {
  let doubleArray = [];
  for (let i = 0; i < myArray.length; i++) {
    doubleArray.push(myArray[i] * 2);
  }
  return doubleArray;
}

app.post('/arrays', jsonParser, (req, res) => {
  let inputAction = req.body.what;
  let myNumbers = req.body.numbers;
  let thisArray = [1, 2, 5, 10];
  if (inputAction === 'sum') {
    res.json({
      result: sum(myNumbers),
    });
  } else if (inputAction === 'multiply') {
    res.json({
      result: multiply(myNumbers),
    });
  } else if (inputAction === 'double') {
    res.json({
      result: double(myNumbers),
    });
  } else {
    res.json({ error: "Please provide what to do with the numbers!" });
  };
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})