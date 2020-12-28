const { validationResult } = require('express-validator');

const { compare } = require('bcrypt');
const { userModel } = require('../models');

const customRegisterValidation = async (req, res) => {
  // check body validations
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // check if email already exists
  const checkEmail = await userModel.findOne({
    where: { email: req.body.email },
  });
  if (checkEmail != null) {
    return res.status(400).json({ message: 'Email Already Exists' });
  }
  return res
    .status(200)
    .json({ message: 'All registeration parameters validated' });
};

const customLoginValidation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const user = await userModel.findOne({ where: { email: req.body.email } });
  if (user == null) {
    return res.status(400).json({
      message: 'User does not exists with this email',
    });
  }
  if (await compare(req.body.password, user.password)) {
    return res.json({
      message: 'User Successfully logged in',
      data: user,
    });
  }
  return res.json({
    message: 'Your email or password is incorrect',
  });
};

exports.module = {
  customRegisterValidation,
  customLoginValidation,
};
