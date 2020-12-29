const express = require('express');
const bodyParser = require('body-parser');
const configuration = require('./constants');

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const user = require('./routes/user');
const blog = require('./routes/blog');
const { checkPermission, checkRole } = require('./_helpers/basicAuth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;
require('dotenv').config();

// Define Routes
app.use('/role', role);
app.use('/permission', permission);
app.use('/blog', checkPermission(['Users', 'Blogs']), blog);
app.use('/', user);

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
