<<<<<<< HEAD
<<<<<<< HEAD
const Team = require('../models/Team');
=======
const { Team, User } = require('../models');
>>>>>>> comment curd is implement
=======
const { Team, User } = require('../models');
>>>>>>> 51dfa8b45cd8ceac4fb2621e2412a229ac129be7

const defaultResponse = require('../utils/defaultResponse');
const constants = require('../utils/constants');
const responseStatus = require('../utils/responseStatus');

<<<<<<< HEAD
exports.getTeam = async (req, res) => {
=======
exports.getTeam = async (_req, res) => {
>>>>>>> 51dfa8b45cd8ceac4fb2621e2412a229ac129be7
  try {
    const team = await Team.findAll({
      include: { model: User, as: 'Members' },
    });
    if (team) {
      defaultResponse().success(
        constants.DATA_RETRIEVED,
        team,
        res,
        responseStatus.SUCCESS
      );
    } else
      defaultResponse().success(
        constants.DATA_NOT_FOUND,
        null,
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

exports.saveTeam = async (req, res) => {
  try {
    const requestBody =
      req.body != null
        ? req.body
        : defaultResponse().error(
            { message: constants.INVALID_BODY },
            res,
            responseStatus.INVALID_BODY
          );
    const team = await Team.create(requestBody);
    if (team) {
      defaultResponse().success(
        constants.DATA_SAVED,
        team,
        res,
        responseStatus.SUCCESS
      );
    } else
      defaultResponse().error(
        constants.DATA_NOT_FOUND,
        res,
        responseStatus.ERROR
      );
  } catch (exception) {
<<<<<<< HEAD
=======
    console.log(exception.message);
>>>>>>> 51dfa8b45cd8ceac4fb2621e2412a229ac129be7
    defaultResponse().error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

exports.update = async (req, res) => {
  try {
    if (req.body) {
      const team = await Team.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      });
      if (team) {
        defaultResponse().success(
          constants.DATA_UPDATED,
          team,
          res,
          responseStatus.SUCCESS
        );
      } else
        defaultResponse().error(
          constants.DATA_NOT_FOUND,
          res,
          responseStatus.ERROR
        );
    }
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
    const team = await Team.destroy({ where: { id } });
    if (team) {
      defaultResponse().success(
        constants.DATA_DELETED,
        team,
        res,
        responseStatus.SUCCESS
      );
    } else
      defaultResponse().error(
        constants.DATA_NOT_FOUND,
        res,
        responseStatus.ERROR
      );
  } catch (exception) {
    defaultResponse().error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};
