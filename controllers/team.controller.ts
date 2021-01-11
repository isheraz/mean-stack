import { Team, User } from '../models';

import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

/**
 * @api {get} /team/get show all team
 * @apiName getAll
 * @apiGroup team
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[
 *        "id": 6,
 *        "name": "red",
 *        "createdAt": "2021-01-07T05:42:53.361Z",
 *        "updatedAt": "2021-01-07T10:53:42.106Z",
 *        "deletedAt": null,
 *        "Users": [
 *         {
 *            "id": 2,
 *            "name": "ismail",
 *            "email": "raza@invozone.com",
 *            "password": "$2b$10$Gd5Y8tIA8eymidmR9brXweIW3ar8LWbrXy5.C26oD00HSpgQecQwO",
 *            "createdAt": "2021-01-07T05:55:11.726Z",
 *            "updatedAt": "2021-01-07T05:55:11.726Z",
 *            "deletedAt": null,
 *            "UserTeam": {
 *            "TeamId": 6,
 *            "UserId": 2,
 *            "createdAt": "2021-01-07T10:53:42.140Z",
 *            "updatedAt": "2021-01-07T10:53:42.140Z"
 *                }
 *          }
 * ]
 *
 * @apiSuccess {Objects[]} teams Array of teams
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */
export const getTeam = async (_req: any, res: any) => {
  try {
    const team = await Team.findAll({
      include: {
        model: User,
        as: 'Users',
      },
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

/**
 * @api {post} /team/create create team
 * @apiName create
 * @apiGroup Team
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} name team name
 * @apiParam {Array} users user id's
 *
 *@apiParamExample Request Body:
 *{
 * "name":"team",
 * "users":[1,2],
 *}
 *
 * @apiSuccess {Boolean} error
 * @apiSuccess {String} message team message
 * @apiSuccess {data} data
 * @apiSuccessExample Response Body
 * {
 *  "error": false,
 * "message": "Request completed and data saved.",
 * "data": {
 *    "createdAt": "2021-01-05T06:24:28.791Z",
 *   "updatedAt": "2021-01-05T06:24:28.792Z",
 *   "id": 7,
 *   "name": "red",
 *   "deletedAt": null
 *}
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "name":"name field is required",
 * "users":"users field is required",
 *}
 *
 * @apiError {String} name team name
 * @apiError {Array} users User id's
 *
 */
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
    Team.create({ name: requestBody.name }).then((user) => {
      user.setUsers(requestBody.users).then((userTeam) => {
        if (user) {
          defaultResponse.success(
            constants.DATA_SAVED,
            user,
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
      });
    });
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

/**
 * @api {put} /team/update/:id update team
 * @apiName update
 * @apiGroup team
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id event id is required
 * @apiParam {String} name team name
 * @apiParam {Number} users User id's
 *
 *@apiParamExample Request Body:
 *{
 * "name":"team",
 * "users":[1,2,3],
 *}
 *
 * @apiSuccess {Boolean} error
 * @apiSuccess {String} message team message
 * @apiSuccess {data} data
 * @apiSuccessExample Response Body
 * {
 *   "error": false,
 *   "message": "Request completed and data updated.",
 *   "data": [
 *     null,
 *     {
 *      "id": 7,
 *      "name": "green",
 *      "createdAt": "2021-01-07T05:45:33.336Z",
 *      "updatedAt": "2021-01-08T11:49:56.101Z",
 *      "deletedAt": null
 *     }
 *   ]
 * }
 *
 * @apiSuccess {Object} team team object after updation
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "error":"id params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "error":"team with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
export const update = async (
  req: { body: any; params: { id: any } },
  res: any
) => {
  try {
    if (req.body) {
      Team.update(req.body, {
        where: { id: req.params.id },
        returning: true,
        plain: true,
      }).then((user) => {
        console.log(user);
        user[1].setUsers(req.body.users).then((userTeam) => {
          if (user) {
            defaultResponse.success(
              constants.DATA_UPDATED,
              user,
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
        });
      });
    }
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};

/**
 * @api {delete} /team/delete/:id delete team by id
 * @apiName delete
 * @apiGroup team
 * @apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam {Number} id event id is required
 * @apiSuccessExample Response Body
 * {
 *  "error": false,
 * "message": "Comment Deleted Successfully.",
 * "data": {
 *   "createdAt": "2021-01-05T06:24:28.791Z",
 *   "updatedAt": "2021-01-05T06:24:28.792Z",
 *   "id": 7,
 *   "name": "red",
 *   "deletedAt": null
 *}
 *
 * @apiSuccess {String} message Message after successful deletion
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "error":"id params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "error":"Event with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
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
