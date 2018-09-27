const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended : false }));
app.use(bodyParser.json());
app.use(cors());

app.post('/signup', (req, res) => {
  console.log(req.body)
  res.send(`<h1>Thanks ${req.body.person_name}, we will send updates to ${req.body.email}</h1>`);
})

app.listen(PORT, () => {
  console.log('jajdejo');
})

