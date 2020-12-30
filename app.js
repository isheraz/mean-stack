const express = require('express');
const bodyParser = require('body-parser');

require('dotenv').config();

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const userRoutes = require('./routes/user');
const eventRoute = require('./routes/eventRoute')(express.Router());
const blog = require('./routes/blog');
// const { checkPermission, checkRole } = require('./_helpers/basicAuth');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;

app.use(cors());

app.use(express.json());

app.use('/role', role);
app.use('/permission', permission);
app.use('/event', eventRoute);
app.use(userRoutes);
app.use('/blog', blog);

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
