import * as express from 'express';
const router= express.Router();
import { body } from 'express-validator';
import userController from '../controllers/user.controller';

router.post(
  '/register',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
);
router.post(
  '/login',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  userController.login
);

export default router;
