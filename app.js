const express = require("express");
const bodyParser = require('body-parser')
const app     = express();
const role  = require('./routes/role');
const permission  = require('./routes/permission');
const { checkPermission, checkRole } = require('./basicAuth')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const port    = process.env.PORT || 6000;
require('dotenv').config()
 
app.use('/role', checkRole('Super-Admin'), role);
app.use('/permission',  permission);
//  checkPermission('Users'),
app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
