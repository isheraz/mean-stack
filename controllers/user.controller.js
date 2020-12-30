const bcrypt = require('bcrypt');
const userModel = require('../models').User;
const { UserRole } = require('../models');
const validations = require('../validations/userValidations.js');
const configuration = require('../constants');
const defaultResponse = require('../utils/defaultResponse');
const constants = require('../utils/constants');
const responseStatus = require('../utils/responseStatus');

exports.register = async (req, res) => {
  try {
    const validator = await validations.customRegisterValidation(req, res);
    if (!validator) {
      req.body.password = await bcrypt.hash(req.body.password, 10);
      const user = await userModel.create(req.body);

      const userRegistered = await UserRole.create({
        userId: user.id,
        roleId: configuration.module.DefaultRoleId,
      });
      if (userRegistered) {
        defaultResponse().success(
          constants.DATA_SAVED,
          user,
          res,
          responseStatus.SUCCESS
        );
      }
    }
  } catch (err) {
    defaultResponse().error(
      { message: err.message },
      res,
      responseStatus.ERROR
    );
  }
};

exports.login = async (req, res) => {
  try {
    await validations.customLoginValidation(req, res);
  } catch (err) {
    defaultResponse().error(
      { message: err.message },
      res,
      responseStatus.ERROR
    );
  }
};
