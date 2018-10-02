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
  let randomNumber = Math.floor(Math.random() * 10);
  conn.query(`SELECT * from answers WHERE id=${randomNumber};`, (err, result) => {
    
    if (err) {
      res.status(400).json({
        error: 'Unexpected error',
    })
    } else {
      console.log(result)
      res.status(200).json({
        question_id: result[0].question_id,
        id: result[0].id,
        answer: result[0].answer,
        is_correct: result[0].is_correct,
      })
    }
  })
})

app.get('/questions', (req, res) => {

})



app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});