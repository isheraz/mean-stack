import * as express from 'express';
const router= express.Router();

import role from './role';
import permission from'./permission';
import userRoutes from'./user';
import team from'./team.routes';
import comments from './comment.routes';
import blog from './blog';

function routes() {
  router.use('/role', role);
  router.use('/permission', permission);
  router.use('/team', team);
  router.use('/comment', comments);
  router.use('/blog', blog);
  router.use(userRoutes);
  return router;
}

export default routes;
