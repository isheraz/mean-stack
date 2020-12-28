const express = require('express');
const bodyParser = require('body-parser');
// const { Pool } = require('pg');
require('dotenv').config();

// const configuration = require('./constants');

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const userRoutes = require('./routes/userRoutes');
const eventRoute = require('./routes/eventRoute')(express.Router());

const {checkRole } = require('./basicAuth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;

app.use('/role', checkRole('Super-Admin'), role);
app.use('/permission', permission);
app.use('/event',eventRoute);
app.use(userRoutes);

// const pool = new Pool(configuration.module.local);

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });


app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
