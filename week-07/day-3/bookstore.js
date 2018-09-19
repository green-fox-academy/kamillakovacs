'use strict'

const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const mysql = require('mysql');
const cors = require('cors');

const conn = mysql.createConnection ({
  host: 'localhost',
  user: 'root',
  password: 'HowNice',
  database: `bookstore`,
});

app.use('/assets', express.static('assets'));
app.use(cors());

app.get('/api/booknames', (req, res) => {
  conn.query(`SELECT book_name from book_mast`, (err,result) => {
    if (err) {
      res.json({
        error: err.message,
      })
    }
    res.json({
      result,
    }) 
  });
});

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);
});


