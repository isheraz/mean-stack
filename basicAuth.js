const { Role } = require('./models');
const { User } = require('./models');
const { UserRole } = require('./models');
const { Permission } = require('./models');

const checkPermission = (permission) => async (_req, res, next) => {
  const user = await User.findOne({
    where: { id: 1 },
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

  const isPermission = permissions.some(
    (permittedUser) => permittedUser.name === permission
  );

  if (!isPermission)
    return res.status(403).send('You have no access to this page.');

  next();
  return true;
};

const checkRole = (userRole) => async (_req, res, next) => {
  const user = await User.findOne({
    where: { id: 1 },
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

  next();
  return true;
};

module.exports = {
  checkPermission,
  checkRole,
};
