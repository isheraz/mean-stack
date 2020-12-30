const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');

const router = require('express').Router();

const userModel = require('../models').User;
const { UserRole } = require('../models');
const validations = require('../validations/userValidations.js');

const configuration = require('../constants');

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
  async (req, res) => {
    try {
      await validations.customLoginValidation(req, res);
    } catch {
      res.status(500).send();
    }
  }
);

module.exports = router;
