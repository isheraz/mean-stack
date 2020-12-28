const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const routes = require('./routes/blog');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = process.env.PORT || 6000;

require('dotenv').config();

app.use('/blog', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
