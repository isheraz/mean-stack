import { Team, User } from '../models';

import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

export const getTeam = async (_req: any, res: any) => {
  try {
    const team = await Team.findAll({
      include: { model: User, as: 'Members' },
    });
    if (team) {
      defaultResponse.success(
        constants.DATA_RETRIEVED,
        team,
        res,
        responseStatus.SUCCESS
      );
    } else {
      defaultResponse.success(
        constants.DATA_NOT_FOUND,
        null,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

export const saveTeam = async (req: { body: any }, res: any) => {
  try {
    const requestBody =
      req.body != null
        ? req.body
        : defaultResponse.error(
            { message: constants.INVALID_BODY },
            res,
            responseStatus.INVALID_BODY
          );
    const team = await Team.create(requestBody);
    if (team) {
      defaultResponse.success(
        constants.DATA_SAVED,
        team,
        res,
        responseStatus.SUCCESS
      );
    } else {
      defaultResponse.error(
        constants.DATA_NOT_FOUND,
        res,
        responseStatus.ERROR
      );
    }
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

export const update = async (
  req: { body: any; params: { id: any } },
  res: any
) => {
  try {
    if (req.body) {
      const team = await Team.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        // plain: true,
      });
      if (team) {
        defaultResponse.success(
          constants.DATA_UPDATED,
          team,
          res,
          responseStatus.SUCCESS
        );
      } else {
        defaultResponse.error(
          constants.DATA_NOT_FOUND,
          res,
          responseStatus.ERROR
        );
      }
    }
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

export const deleteTeam = async (req: { params: { id: any } }, res: any) => {
  const id =
    req.params.id != null
      ? req.params.id
      : defaultResponse.error(
          { message: 'Params are Missing' },
          res,
          responseStatus.INVALID_BODY
        );
  try {
    const team = await Team.destroy({ where: { id } });
    if (team) {
      defaultResponse.success(
        constants.DATA_DELETED,
        team,
        res,
        responseStatus.SUCCESS
      );
    } else {
      defaultResponse.error(
        constants.DATA_NOT_FOUND,
        res,
        responseStatus.ERROR
      );
    }
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};
