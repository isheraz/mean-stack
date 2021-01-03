import { Router } from 'express';
import { body } from 'express-validator';
import { login } from '../controllers/user.controller';

const router = Router();

router.post('/register', [
  body('email').isEmail(),
  body('password').isLength({ min: 6 }),
]);
router.post(
  '/login',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  login
);

export default router;
