'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'HowNice',
  database: `quiz`,
  multipleStatements: true,
});

app.use('/assets', express.static('assets'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/game', (req, res) => {
  let randomNumber = Math.ceil(Math.random() * 10);
  conn.query(`SELECT questions.id, question_id, answer, is_correct, question FROM answers INNER JOIN questions ON answers.question_id = questions.id where questions.id=${randomNumber};`, (err, result) => {
    if (err) {
      res.status(400).json({
        error: 'Unexpected error',
    })
    } else {
      console.log(result)
      let theAnswers = [];
      result.forEach(elem => {
        theAnswers.push(elem)
      })
      console.log(theAnswers)

      res.status(200).json({
        id: result[0].id,
        question: result[0].question,
        answers: theAnswers,
      })
    }
  })
})

app.get('/questions', (req, res) => {
  conn.query(`SELECT * FROM questions;`, (err, result) => {
    if (err) {
      res.status(400).json({
        error: 'Unexpected error',
    })
    } else {
      res.status(200).json({result})
    }
  })
})

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});