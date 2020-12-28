const { Comment } = require('../models');

const defaultResponse = require('../utils/defaultResponse');
const constants = require('../utils/constants');
const responseStatus = require('../utils/responseStatus');

exports.create = async (req, res) => {
  const requestBody =
    req.body != null
      ? req.body
      : defaultResponse().error(
          { message: constants.INVALID_BODY },
          res,
          responseStatus.INVALID_BODY
        );

  try {
    const comment = await Comment.create(requestBody);
    if (!comment) {
      defaultResponse().error(
        { message: 'Comment is not posted' },
        res,
        responseStatus.ERROR
      );
    } else
      defaultResponse().success(
        constants.DATA_SAVED,
        comment,
        res,
        responseStatus.SUCCESS
      );
  } catch (exception) {
    defaultResponse().error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

exports.getAll = async (_req, res) => {
  try {
    const comments = await Comment.findAll();
    console.log('>>>>>>>>>>>>>'+comments)
    if (!comments)
      defaultResponse().success(
        constants.DATA_NOT_FOUND,
        null,
        res,
        responseStatus.SUCCESS
      );
    else
      defaultResponse().success(
        constants.DATA_RETRIEVED,
        comments,
        responseStatus.SUCCESS
      );
  } catch (exception) {
    defaultResponse().error(
      { messsage: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};
