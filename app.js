const express = require('express');
const bodyParser = require('body-parser');
// const { Pool } = require('pg');
const configuration = require('./constants');

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const user = require('./routes/user');
const blog = require('./routes/blog');
const team = require('./routes/team.routes');
const { checkPermission, checkRole } = require('./_helpers/basicAuth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;
require('dotenv').config();

// Define Routes
app.use('/role', role);
app.use('/permission', permission);
app.use('/blog', blog);
app.use('/', user);
app.use('/team', team);

// const pool = new Pool({
//   user: 'admin',
//   host: 'localhost',
//   database: 'basic_node',
//   password: '123',
//   port: '43401',
// });

// pool.query('SELECT NOW()', (err, res) => {
//   console.log(err, res);
//   pool.end();
// });

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
