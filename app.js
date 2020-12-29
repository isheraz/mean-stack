const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const role = require('./routes/role');
const permission = require('./routes/permission');
const userRoutes = require('./routes/user');
const eventRoute = require('./routes/eventRoute')(express.Router());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
const port = process.env.PORT || 6000;

// Define Routes
app.use('/role', role);
app.use('/permission', permission);
app.use('/event', eventRoute);
app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
