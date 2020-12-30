const router = require('express').Router();
const { body, validationResult } = require('express-validator');
const userController = require('../controllers/user.controller');

router.post(
  '/register',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  async (req, res) => {
    try {
      const validator = await validations.customRegisterValidation(req, res);
      if (!validator) {
        req.body.password = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.create(req.body);

        await UserRole.create({
          userId: user.id,
          roleId: configuration.module.DefaultRoleId,
        });
        res.json({
          meassage: 'User Created Successfully!',
          data: user,
        });
      }
    } catch (err) {
      res.status(500).send(err);
    }
  }
);
router.post(
  '/login',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  userController.login
);

module.exports = router;
