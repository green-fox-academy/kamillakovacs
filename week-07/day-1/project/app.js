'use strict'

const express = require('express');
const app = express();
const PORT = 8080;
const path = require('path');

app.use('/assets', express.static('assets'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling', (res, req) => {

});

app.listen(PORT, () => {
  console.log(`The server is up and running on port ${PORT}`);
})