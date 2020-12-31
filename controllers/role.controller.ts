import { Role, RoleHasPermission } from '../models';

export const getRole = async (_req, res) => {
  const roles = await Role.findAll();
  res.status(200).json({ data: roles });
};

export const saveRole = async (req, res) => {
  const role = await Role.create({
    name: req.body.name,
  });
  res.status(200).json({ data: role });
};

export const assignPermissionToRole = async (req, res) => {
  const pivot = {
    permissionId: req.params.roleId,
    roleId: req.params.permissionId,
  };

  const saveData = await RoleHasPermission.create(pivot);
  res.status(200).json(saveData);
};
