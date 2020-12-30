const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const configuration = require('./constants');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;
require('dotenv').config();

app.use(cors());

app.use(express.json());
app.use('/', routes);

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Authorization, Content-Type Cache-Control'
  );
  res.header('Cache-Control', 'max-age=0');
  next();
});

const pool = new Pool(configuration.module.local);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
