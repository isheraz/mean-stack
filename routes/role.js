const express = require("express");
const routes = require('express').Router();
const Role = require('../models').Role;
const User = require('../models').User;
const UserRole = require('../models').UserRole;
const Permission = require('../models').Permission;
const RoleHasPermission = require('../models').RoleHasPermission;
// Get All Roles
routes.get('/', async (req, res) => {
  const roles = await Role.findAll();
  res.status(200).json({ 'data': roles });

});

routes.get('/create', async (req, res) => {
  const role = await Role.create({
    name: req.body.name
  });
  res.status(200).json({'data': role });
});

routes.put('/:roleId/permissions/:permissionId', async (req, res) => {
   
    const pivot = {
      permissionId: req.params.roleId,
      roleId: req.params.permissionId
    }

    // Create a Record
    const saveData = await RoleHasPermission.create(pivot);
    res.status(200).json(saveData);
});
module.exports = routes;
