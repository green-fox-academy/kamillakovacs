// window.onload = () => {
//   const host = 'http://localhost:3000';
//   const http = new XMLHttpRequest;

// }

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3000;
app.use(bodyParser.urlencoded( { extended : false } ));
app.use(cors());



