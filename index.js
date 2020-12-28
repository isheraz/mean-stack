const express = require('express');
const { Pool } = require('pg');

const userRoutes = require('./routes/userRoutes');
const eventRoute = require('./routes/eventRoute')(express.Router());
const constants = require('./constants');

const app = express();
// using userRoutes
app.use(userRoutes);
app.use('/event', eventRoute);

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

app.listen(6003, () => {
  console.log('server is up and running!');
});
