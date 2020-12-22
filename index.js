const express = require('express');
const userRoutes = require('./routes/userRoutes');

const app = express();

// using userRoutes
app.use(userRoutes);

app.listen(6000, () => {
    console.log('server is up and running!');
  });
