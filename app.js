const express = require("express");
const bodyParser = require('body-parser')
const app     = express();
const role  = require('./routes/role');
const permission  = require('./routes/permission');
const eventRoute = require('./routes/eventRoute')(express.Router())

const { checkPermission, checkRole } = require('./basicAuth')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port    = process.env.PORT || 6000;
require('dotenv').config();
 
app.get('/event',eventRoute);
app.use('/role', checkRole('Super-Admin'), role);
app.use('/permission', permission);
app.use(userRoutes);

const pool = new Pool(configuration.local);

pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res);
  pool.end();
});

app.listen(port, () => {
  console.log(`Server running on port localhost:${port}`);
});
