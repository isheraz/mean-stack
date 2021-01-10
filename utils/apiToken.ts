import jwt from 'jsonwebtoken';
import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

export default (req, res, next) => {
  const getToken = req.header('Authorization');
  if (!getToken) {
    defaultResponse.error(
      { message: constants.NO_TOKEN },
      res,
      responseStatus.NO_TOKEN
    );
  }
  const token = getToken.split(' ')[1];
  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (error) {
    defaultResponse.error(
      { message: constants.TOKEN_ERROR },
      res,
      responseStatus.NO_TOKEN
    );
  }
};
