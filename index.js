const express = require('express');
const userRoutes = require('./routes/userRoutes');

const porject_env = require('dotenv').config();
const { Pool } = require('pg');
const constants = require('./constants');
const app = express();

// using userRoutes
app.use(userRoutes);

const pool = new Pool({
  user: constants.DB_USERNAME,
  host: constants.PG_HOST,
  database: constants.DATABASE,
  password: constants.DB_PASSWORD,
  port: constants.PG_PORT,
});
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

app.listen(6000, () => {
  console.log('server is up and running!');
});
