const router = require('express').Router();

const role = require('./role');
const permission = require('./permission');
const userRoutes = require('./user');
const team = require('./team.routes');
const comments = require('./comment.routes');
const blog = require('./blog');

function routes(step, plugin) {
  router.use('/role', role);
  router.use('/permission', permission);
  router.use('/team', team);
  router.use('/comment', comments);
  router.use('/blog', blog);
  router.use(userRoutes);
  return router;
}

module.exports = routes();
