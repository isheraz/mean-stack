import { Role, User, UserRole, Permission } from '../models';

const checkPermission = (userPermission) => async (req, res, next) => {
  const userId = req.user.id;
  const user = await User.findOne({
    where: { id: userId },
    include: [
      {
        model: UserRole,
        as: 'userRole',
      },
    ],
  });
  if (!user) return res.status(403).send('User not found.');

  const userRole = user.userRole ? user.userRole.roleId : null;
  if (!userRole)
    return res.status(403).send('You have not assigned a role yet.');

  const role = await Role.findOne({
    where: { id: userRole },
    include: [
      {
        model: Permission,
        as: 'permissions',
      },
    ],
  });
  const permissions = role ? role.permissions : null;
  let userPermissions = userPermission;
  if (typeof userPermissions === 'string') {
    userPermissions = [userPermissions];
  }
  const isPermission = permissions.every((permission) =>
    userPermissions.includes(permission.name)
  );

  if (!isPermission)
    return res.status(403).send('You have no access to this page.');

  next();
  return true;
};

const checkRole = (userRole) => async (req, res, next) => {
  const userId = req.user.id;
  const user = await User.findOne({
    where: { id: userId },
    include: [
      {
        model: UserRole,
        as: 'userRole',
      },
    ],
  });

  if (!user) return res.status(403).send('User not found.');

  const userRoleId = user.userRole ? user.userRole.roleId : null;
  if (!userRoleId)
    return res.status(403).send('You have not assigned a role yet.');

  const role = await Role.findOne({ where: { id: userRoleId } });
  if (!role)
    return res.status(403).send('You have not assigned specific role.');

  const isHasRole = role.name === userRole;
  if (!isHasRole)
    return res.status(403).send('You have no access to this page.');

  return next();
};

export { checkPermission, checkRole };
