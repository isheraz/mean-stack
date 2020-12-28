const express = require('express');

const userRoutes = require('./routes/userRoutes');
const eventRoute = require('./routes/eventRoute')(express.Router());
const constants = require('./constants');

const app = express();
// using userRoutes
app.use(userRoutes);
app.use('/event', eventRoute);

// const app = express();

app.listen(6003, () => {
  console.log('server is up and running!');
});
