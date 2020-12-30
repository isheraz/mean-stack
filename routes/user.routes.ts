import { Router } from 'express';
import { body } from 'express-validator';
import authToken from '../utils/apiToken';
import { login, register, allUsers } from '../controllers/user.controller';

const router = Router();

router.post(
  '/register',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  register
);
router.post(
  '/login',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  login
);
router.get('/users', allUsers);

router.get('/users', authToken, allUsers);

export default router;
