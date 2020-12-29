const bodyParser = require('body-parser');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const express = require('express');

const router = express.Router();
// const { create } = require('domain');
const userModel = require('../models').User;
const { UserRole } = require('../models');
const validations = require('../validations/userValidations.js');

const configuration = require('../constants');

const app = express();

// for parsing application/json
router.use(bodyParser.json());
// for parsing application/xwww-
router.use(bodyParser.urlencoded({ extended: true }));
// form-urlencoded

router.post(
  '/register',
  [body('email').isEmail(), body('password').isLength({ min: 6 })],
  async (req, res) => {
    try {
      const validator = await validations.customRegisterValidation(req, res);
      if (!validator) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const user = await userModel.create({
          name: req.body.name,
          email: req.body.email,
          password: hashedPassword,
        });
        // Create a Record
        const assignUserRole = UserRole.create({
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
