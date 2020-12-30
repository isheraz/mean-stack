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
    if (!comments) {
      defaultResponse().success(
        constants.DATA_NOT_FOUND,
        null,
        res,
        responseStatus.SUCCESS
      );
    } else {
      defaultResponse().success(
        constants.DATA_RETRIEVED,
        comments,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (excep) {
    defaultResponse().error(
      { messsage: excep.message },
      res,
      responseStatus.ERROR
    );
  }
};

exports.update = async (req, res) => {
  const requestBody =
    req.body != null
      ? req.body
      : defaultResponse().error(
          { message: constants.INVALID_BODY },
          res,
          responseStatus.INVALID_BODY
        );

  const id =
    req.params.id != null
      ? req.params.id
      : defaultResponse().error(
          { message: 'Params are Missing' },
          res,
          responseStatus.INVALID_BODY
        );
  try {
    const comment = await Comment.update(requestBody, {
      where: { id },
      returning: true,
      plain: true,
    });
    if (!comment)
      defaultResponse().error(
        constants.DATA_NOT_FOUND,
        res,
        responseStatus.ERROR
      );
    else
      defaultResponse().success(
        constants.DATA_UPDATED,
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

exports.delete = async (req, res) => {
  const id =
    req.params.id != null
      ? req.params.id
      : defaultResponse().error(
          { message: 'Params are Missing' },
          res,
          responseStatus.INVALID_BODY
        );
  try {
    const comment = await Comment.destroy({
      where: { id },
      returning: true,
      plain: true,
    });
    if (!comment) {
      defaultResponse().error(
        { message: constants.DATA_NOT_FOUND },
        res,
        responseStatus.ERROR
      );
    } else {
      defaultResponse().success(
        constants.DATA_DELETED,
        comment,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (excep) {
    defaultResponse().error(
      { message: excep.message },
      res,
      responseStatus.ERROR
    );
  }
};
