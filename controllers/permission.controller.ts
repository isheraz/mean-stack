import { Permission } from '../models';

/**
 * @api {get} /permission All Permission
 * @apiName AllPermissions
 * @apiGroup Permission
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiSuccess {data[]} data       Response data which includes Permission object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *    {
 *   "data": [
 *       {
 *           "id": 1,
 *           "name": "Users",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 2,
 *           "name": "Blogs",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 3,
 *           "name": "Edit-Blog",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 4,
 *           "name": "Delete-Blog",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 5,
 *           "name": "Comments",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 6,
 *           "name": "Teams",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 7,
 *           "name": "Events",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 8,
 *           "name": "Edit-Event",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       },
 *       {
 *           "id": 9,
 *           "name": "Delete-Event",
 *           "createdAt": "2021-01-01T07:19:19.931Z",
 *           "updatedAt": "2021-01-01T07:19:19.931Z"
 *       }
 *   ]
 * }
 */

export const GetPermission = async (_req, res) => {
  const permission = await Permission.findAll();
  res.status(200).json({ data: permission });
};

/**
 * @api {post} /permission/create Create The Permission
 * @apiName CreatePermission
 * @apiGroup Permission
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiParam {String} name         Name of the Permission.
 * @apiSuccess {data[]} data       Response data which includes Permission object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     "data": {
 *           "id": 6,
 *           "name": "All-Data",
 *           "updatedAt": "2021-01-05T08:17:04.093Z",
 *           "createdAt": "2021-01-05T08:17:04.093Z"
 *         }
 */

export const SavePermission = async (req, res) => {
  const permission = await Permission.create({
    name: req.body.name,
  });
  res.status(200).json({ data: permission });
};
