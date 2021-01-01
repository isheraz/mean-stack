import { hash }  from 'bcrypt';
import { userModel } from '../models';
import { UserRole } from '../models';
import { validations } from '../validations/userValidations';
import { configuration } from '../constants';
import { defaultResponse } from '../utils/defaultResponse';
import { constants } from '../utils/constants';
import { responseStatus } from '../utils/responseStatus';

export const register = async (req, res) => {
  try {
    const validator = await validations.customRegisterValidation(req, res);
    if (!validator) {
      req.body.password = await hash(req.body.password, 10);
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

export const login = async (req, res) => {
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
