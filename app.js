const express = require('express');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const cors = require('cors');
const configuration = require('./constants');

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const userRoutes = require('./routes/user');
const team = require('./routes/team.routes');
const comments = require('./routes/comment.routes');
const blog = require('./routes/blog');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;
require('dotenv').config();

app.use(cors());

app.use(express.json());

app.use('/role', role);
app.use('/permission', permission);
app.use('/team', team);
app.use('/comment', comments);
app.use('/blog', blog);
app.use(userRoutes);

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
