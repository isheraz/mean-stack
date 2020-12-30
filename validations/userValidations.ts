import  {validationResult}  from 'express-validator';
import { compare } from 'bcrypt';
import  User from '../models';
import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

const customRegisterValidation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    defaultResponse.error({ message: errors }, res, responseStatus.ERROR);
  }

  const checkEmail = await User.findOne({
    where: { email: req.body.email },
  });
  if (checkEmail != null) {
    defaultResponse.error(
      { message: constants.EMAIL_EXIST },
      res,
      responseStatus.ERROR
    );                                      
  }
  return false;
};

const customLoginValidation = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    defaultResponse.error({ message: errors }, res, responseStatus.ERROR);
  }
  const user = await User.findOne({ where: { email: req.body.email } });
  if (user == null) {
    defaultResponse.error(
      { message: constants.USER_NOTFOUND },
      res,
      responseStatus.ERROR
    );
  }
  if (await compare(req.body.password, user.password)) {
    defaultResponse.success(
      constants.USER_LOGGEDIN,
      user,
      res,
      responseStatus.SUCCESS
    );
  }
  defaultResponse.error(
    { message: constants.PASSOWRD_ERROR },
    res,
    responseStatus.ERROR
  );
};

export {
  customRegisterValidation,
  customLoginValidation,
};
