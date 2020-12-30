const express = require('express');
const routes = require('express').Router();
const { Role } = require('../models');
const { RoleHasPermission } = require('../models');

routes.get('/', async (req, res) => {
  const roles = await Role.findAll();
  res.status(200).json({ data: roles });
});

routes.get('/create', async (req, res) => {
  const role = await Role.create({
    name: req.body.name,
  });
  res.status(200).json({ data: role });
});

routes.put('/:roleId/permissions/:permissionId', async (req, res) => {
  const pivot = {
    permissionId: req.params.roleId,
    roleId: req.params.permissionId,
  };

  const saveData = await RoleHasPermission.create(pivot);
  res.status(200).json(saveData);
});
module.exports = routes;
