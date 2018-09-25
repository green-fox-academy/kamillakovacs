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

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
})

app.get('/hello', (req, res) => {
  console.log('hello world');
})

app.get('/api/booknames', (req, res) => {
  conn.query(`SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON book_mast.aut_id = author.aut_id INNER JOIN category ON book_mast.cate_id = category.cate_id INNER JOIN publisher ON book_mast.pub_id = publisher.pub_id;`, (err,result) => {
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


