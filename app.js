const express = require("express");
const cors = require('cors')
const app     = express();

require('dotenv').config()
const host = process.env.NODE_ENV === "production" ? process.env.HOST : 'http://subdomain.jscms.test:6000/';
const port = process.env.PORT || 6000;

const whitelisted = ['http://localhost:6000/', 'http://jscms.test/'];
const corsOptionsDelegate = function (req, callback) {
    let corsOptions;
    if (whitelisted.indexOf(req.header('Origin')) !== -1) {
      corsOptions = { origin: true } 
    } else {
      corsOptions = { origin: false }
    }
    callback(null, corsOptions)
}

app.get('/', cors(corsOptionsDelegate), function (_req, res) {
    res.json({msg: 'Define routes in express and configure cors!'})
})

app.listen(port, () => {
    console.log(`Server running on port ${host}`);
});
