const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post(
  '/register',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  userController.register
);
router.post(
  '/login',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  userController.login
);

module.exports = router;
