'use strict';

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
  database: `spacetravel`,
  multipleStatements: true,
});

app.use('/assets', express.static('assets'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : false }));

app.get('/', function(request, response) {
  response.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/planets', (req, res) => {
  conn.query(`SELECT * FROM planet;`, (err, result) => {
    if(err) {
      console.log(`Database error GET`);
      res.status(400).send(err.message);
      return;
    } else {
      res.status(200).json({
        result,
      })
    }
  })
})

// app.post('/movehere/{planet_id}', (err, result) => {

// })

const listen = app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});


module.exports = { app, listen, conn };
