const routes = require('express').Router();
const { Role } = require('../models');
const { RoleHasPermission } = require('../models');

exports.role = async (_req, res) => {
  const roles = await Role.findAll();
  res.status(200).json({ data: roles });
};

exports.saveRole = async (req, res) => {
  const role = await Role.create({
    name: req.body.name,
  });
  res.status(200).json({ data: role });
};

exports.assignPermissionToRole = async (req, res) => {
  const pivot = {
    permissionId: req.params.roleId,
    roleId: req.params.permissionId,
  };

  const saveData = await RoleHasPermission.create(pivot);
  res.status(200).json(saveData);
};
