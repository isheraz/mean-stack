import { Router } from 'express';
import role from './role.routes';
import permission from './permission.routes';
import userRoutes from './user.routes';
import team from './team.routes';
import comments from './comment.routes';
import blog from './blog.routes';
import events from './event.routes';
import authToken from '../utils/apiToken';

const router = Router();

const routes = () => {
  router.get('/', (_req, res) => {
    res.json({ message: `Server is running on ${process.env.PORT}` });
  });
  router.use('/role', role);
  router.use('/permission', authToken, permission);
  router.use('/team', authToken, team);
  router.use('/comment', authToken, comments);
  router.use('/event', authToken, events);
  router.use('/blog', authToken, blog);
  router.use(userRoutes);
  return router;
};

export default routes;
