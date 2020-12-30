const { Permission } = require('../models');

exports.permission = async (_req, res) => {
  const permission = await Permission.findAll();
  res.status(200).json({ data: permission });
};

exports.savePermission = async (req, res) => {
  const permission = await Permission.create({
    name: req.body.name,
  });
  res.status(200).json({ data: permission });
};
