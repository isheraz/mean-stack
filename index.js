const express = require('express');
const userRoutes = require('./routes/userRoutes');
const eventRoute = require('./routes/eventRoute')(express.Router())
const porject_env = require('dotenv').config();
const { Pool } = require('pg');
const constants = require('./constants');
const app = express();

// using userRoutes
app.use(userRoutes);
app.use('/event',eventRoute);

// const app = express();

// app.use(userRoutes);

// const pool = new Pool(config.local);
// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

// app.createServer.listen(6000, () => {
//   console.log('server is up and running!');
// });
