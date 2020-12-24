const express= require ('express');
const bodyParser= require ('body-parser');
const routes= require('./routes');
const cors= require('cors');
const app= express();
require ('dotenv').config();

app.use(cors());
app.use(express.json());
app.use('/', routes)

app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Authorization, Content-Type Cache-Control');
	res.header('Cache-Control', 'max-age=0');
	next();
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.listen(3000,()=>console.log('server is running on' +'3000'))
