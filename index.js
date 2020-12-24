const express = require('express');
const dotenv = require('dotenv');
dotenv.config()
const app  = express();
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type Cache-Control');
	res.header('Cache-Control', 'max-age=0');
	next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const eventRoute = require('./routes/eventRoute')(express.Router())
app.use('/api',eventRoute);



app.listen(process.env.PORT,()=>console.log('Server is Listening on Port :3000'));
