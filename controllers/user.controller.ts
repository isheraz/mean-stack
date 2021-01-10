import { hash } from 'bcrypt';
import { DefaultRoleId } from '../constants';
import { User as userModel, UserRole } from '../models';
import * as validations from '../validations/userValidations';
import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

/**
 * @api {post} /register Register The User
 * @apiName RegisterUser
 * @apiGroup User
 * @apiParam {String} name         Name of the User.
 * @apiParam {String} email        Email of the User.
 * @apiParam {String} password     Password of the User.
 * @apiParam {number} role         Role ID for User Associated with the Role Model.
 * @apiSuccess {String} error      True if there is some error, otherwise False.
 * @apiSuccess {String} message    Response Success Message.
 * @apiSuccess {data[]} data       Response data which includes User object.
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *     {
 *       "error": true,
 *       "message": "Email already exists",
 *       "data": null
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "message": "Request completed and data saved.",
 *       "data": {
 *       "id": 36,
 *       "name": "testuser",
 *       "email": "testuser1234@test.com",
 *       "password": "$2b$10$1rBkiHgEkvMSRfEiPPfc9e0lOEJGdC/Un1xPSUrX3JlJ0D.FQTKKu",
 *       "updatedAt": "2021-01-05T06:41:41.230Z",
 *       "createdAt": "2021-01-05T06:41:41.230Z",
 *       "teamId": null,
 *       "deletedAt": null
 *      }
 *  }
 */

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

/**
 * @api {post} /login Login User
 * @apiName LoginUser
 * @apiGroup User
 * @apiParam {String} email        Email of the User.
 * @apiParam {String} password     Password of the User.
 * @apiSuccess {String} error      True if there is some error, otherwise False.
 * @apiSuccess {String} message    Response Success Message.
 * @apiSuccess {data[]} data       Response data which includes User object.
 * @apiSuccess {string} token      Authentication Token
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 400 Bad Request
 *         {
 *             "error": true,
 *             "message": {
 *             "errors": [
 *               {
 *             "value": "1231",
 *             "msg": "Invalid value",
 *             "param": "password",
 *             "location": "body"
 *             }
 *        ]
 *    },
 *  "data": null
 * }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "message": "User is logged-in",
 *       "data": {
 *       "id": 36,
 *       "name": "testuser",
 *       "email": "testuser1234@test.com",
 *       "password": "$2b$10$1rBkiHgEkvMSRfEiPPfc9e0lOEJGdC/Un1xPSUrX3JlJ0D.FQTKKu",
 *       "updatedAt": "2021-01-05T06:41:41.230Z",
 *       "createdAt": "2021-01-05T06:41:41.230Z",
 *       "teamId": null,
 *       "deletedAt": null
 *      },
 *      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjAsIm5hbWUiOiJ0ZXN0IiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwiaWF0IjoxNjA5NzYxNDkzfQ.M_CjDmTYnVqhNd9c5bt7plrAZ_Iv4s0k5wkQJRbLlT4"
 *  }
 */

export const login = async (req, res) => {
  try {
    await validations.customLoginValidation(req, res);
  } catch (err) {
    defaultResponse.error({ message: err.message }, res, responseStatus.ERROR);
  }
};

/**
 * @api {get} /users All Users
 * @apiName AllUser
 * @apiGroup User
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiSuccess {String} error      True if there is some error, otherwise False.
 * @apiSuccess {String} message    Response Success Message.
 * @apiSuccess {data[]} data       Response data which includes Users object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "error": false,
 *       "message": "Request completed and data retrieved.",
 *       "data": [
 *         {
 *           "id": 8,
 *           "name": "test12",
 *           "email": "test1test.com",
 *           "password": "$2b$10$lYnjHWdz6WZVCt0v76l.Z.T7kS5nlkPu0QLa64dID3Xlz5ZtQD0de",
 *           "teamId": null,
 *           "createdAt": "2020-12-30T10:03:21.376Z",
 *           "updatedAt": "2020-12-30T10:03:21.376Z",
 *           "deletedAt": null
 *       },
 *       {
 *           "id": 9,
 *           "name": "test12",
 *           "email": "test1@test.com",
 *           "password": "$2b$10$K3RxHq2Tz0uDlupbfRiX0.1QKDmlLW2K.vJl.mZjABDb.sIDcjcLe",
 *           "teamId": null,
 *           "createdAt": "2020-12-30T10:05:46.634Z",
 *           "updatedAt": "2020-12-30T10:05:46.634Z",
 *           "deletedAt": null
 *       },
 *       {
 *           "id": 12,
 *           "name": "test12",
 *           "email": "test221@test.com",
 *           "password": "$2b$10$pDZQeyZHzzAWtZyLd41Xo.kfaFOGxOYhUi2YqsCMSk0tPREBaRFi2",
 *           "teamId": null,
 *           "createdAt": "2020-12-30T10:09:32.102Z",
 *           "updatedAt": "2020-12-30T10:09:32.102Z",
 *           "deletedAt": null
 *       },
 *    ]
 * }
 */
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
