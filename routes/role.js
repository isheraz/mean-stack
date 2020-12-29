const express = require('express');
const routes = require('express').Router();
const { Role } = require('../models');
const { RoleHasPermission } = require('../models');
// Get All Roles
routes.get('/', async (req, res) => {
  const roles = await Role.findAll();
  res.status(200).json({ data: roles });
});
// Create Role
routes.get('/create', async (req, res) => {
  const role = await Role.create({
    name: req.body.name,
  });
  res.status(200).json({ data: role });
});
// Assign Permission To A Role
routes.put('/:roleId/permissions/:permissionId', async (req, res) => {
  const pivot = {
    permissionId: req.params.roleId,
    roleId: req.params.permissionId,
  };

  // Create a Record
  const saveData = await RoleHasPermission.create(pivot);
  res.status(200).json(saveData);
});
module.exports = routes;
