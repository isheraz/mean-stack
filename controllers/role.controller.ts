import { Role, RoleHasPermission } from '../models';
/**
 * @api {get} /roles All Roles
 * @apiName AllRoles
 * @apiGroup Role
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiSuccess {data[]} data       Response data which includes Roles object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "data": [
 *         {
 *           "id": 1,
 *           "name": "Super-Admin",
 *           "createdAt": "2021-01-01T07:19:19.917Z",
 *           "updatedAt": "2021-01-01T07:19:19.917Z"
 *       },
 *       {
 *           "id": 2,
 *           "name": "Admin",
 *          "createdAt": "2021-01-01T07:19:19.917Z",
 *           "updatedAt": "2021-01-01T07:19:19.917Z"
 *       },
 *       {
 *          "id": 3,
 *           "name": "Editor",
 *           "createdAt": "2021-01-01T07:19:19.917Z",
 *           "updatedAt": "2021-01-01T07:19:19.917Z"
 *       },
 *       {
 *           "id": 4,
 *           "name": "Subscriber",
 *           "createdAt": "2021-01-01T07:19:19.917Z",
 *           "updatedAt": "2021-01-01T07:19:19.917Z"
 *       },
 *       {
 *           "id": 5,
 *           "name": "Guest",
 *           "createdAt": "2021-01-01T07:19:19.917Z",
 *           "updatedAt": "2021-01-01T07:19:19.917Z"
 *       }
 *    ]
 * }
 */

export const getRole = async (_req, res) => {
  const roles = await Role.findAll();
  res.status(200).json({ data: roles });
};

/**
 * @api {post} /roles/create Create The Role
 * @apiName CreateRole
 * @apiGroup Role
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiParam {String} name         Name of the Role.
 * @apiSuccess {data[]} data       Response data which includes Role object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     "data": {
 *           "id": 6,
 *           "name": "Manager",
 *           "updatedAt": "2021-01-05T08:17:04.093Z",
 *           "createdAt": "2021-01-05T08:17:04.093Z"
 *         }
 */

export const saveRole = async (req, res) => {
  const role = await Role.create({
    name: req.body.name,
  });
  res.status(200).json({ data: role });
};

/**
 * @api {put} /roles/:roleID/permissions/:permissionID
 * @apiName UpdateRolePermission
 * @apiGroup RoleHasPermission
 * @apiHeaderExample {json} Header-Example:
 *     {
 *       "Authorization": "Authentication Token"
 *     }
 * @apiSuccess {data[]} data       Response data which includes RoleHasPermission object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *         "id": 1,
 *         "permissionId": 1,
 *         "roleId": 2,
 *         "updatedAt": "2021-01-05T08:18:36.888Z",
 *         "createdAt": "2021-01-05T08:18:36.888Z"
 *     }
 */

export const assignPermissionToRole = async (req, res) => {
  const pivot = {
    permissionId: req.params.roleId,
    roleId: req.params.permissionId,
  };

  const saveData = await RoleHasPermission.create(pivot);
  res.status(200).json(saveData);
};
