const express = require('express');
const routes = require('express').Router();
const { Permission } = require('../models');

routes.get('/', async (req, res) => {
  const permission = await Permission.findAll();
  res.status(200).json({ data: permission });
});

routes.get('/create', async (req, res) => {
  const permission = await Permission.create({
    name: req.body.name,
  });
  res.status(200).json({ data: permission });
});

module.exports = routes;
