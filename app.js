const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const configuration = require('./constants');

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const userRoutes = require('./routes/user');
const team = require('./routes/team.routes');
const comments = require('./routes/comment.routes');

// const { checkPermission, checkRole } = require('./basicAuth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;
require('dotenv').config();

// Define Routes
app.use('/role', role);
app.use('/permission', permission);
app.use('/team', team);
app.use('/comment', comments);
app.use(userRoutes);

const pool = new Pool(configuration.module.local);

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
