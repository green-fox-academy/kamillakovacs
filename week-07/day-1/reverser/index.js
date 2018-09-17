'use strict'

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

app.use('/assets', express.static('assets'));

app.post('/sith', jsonParser, (req, res) => {
  let text = req.body.sentence;
  if (req.body.sentence) {
    res.json({
      result: sum(text),
    });
  } else {
    res.json({ error: "Feed me some text you have to, padawan young you are. Hmmm." });
  };
});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})