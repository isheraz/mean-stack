import { validationResult } from 'express-validator';
import { compare } from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models';
import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

export const customRegisterValidation = async (req, res) => {
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

export const customLoginValidation = async (req, res) => {
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
    const loggedUser = {
      id: user.id,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(loggedUser, process.env.TOKEN_SECRET);
    defaultResponse.success(
      constants.USER_LOGGEDIN,
      user,
      res,
      responseStatus.SUCCESS,
      token
    );
  }
  defaultResponse.error(
    { message: constants.PASSOWRD_ERROR },
    res,
    responseStatus.ERROR
  );
};
