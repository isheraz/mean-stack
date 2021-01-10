import { hash } from 'bcrypt';

import { DefaultRoleId } from '../constants';
import { User as userModel, UserRole } from '../models';
import * as validations from '../validations/userValidations';
import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

export const register = async (req, res) => {
  try {
    const validator = await validations.customRegisterValidation(req, res);
    if (!validator) {
      req.body.password = await hash(req.body.password, 10);
      const user = await userModel.create(req.body);

      const userRegistered = await UserRole.create({
        userId: user.id,
        roleId: DefaultRoleId,
      });
      if (userRegistered) {
        defaultResponse.success(
          constants.DATA_SAVED,
          user,
          res,
          responseStatus.SUCCESS
        );
      }
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

export const login = async (req, res) => {
  try {
    await validations.customLoginValidation(req, res);
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

export const allUsers = async (_req, res) => {
  try {
    const users = await userModel.findAll();
    if (users) {
      defaultResponse.success(
        constants.DATA_RETRIEVED,
        users,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};
