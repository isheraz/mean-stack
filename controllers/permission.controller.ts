import { Permission } from '../models';

const getPermission = async (_req, res) => {
  const permission = await Permission.findAll();
  res.status(200).json({ data: permission });
};

const savePermission = async (req, res) => {
  const permission = await Permission.create({
    name: req.body.name,
  });
  res.status(200).json({ data: permission });
};

module.exports = {
  getPermission,
  savePermission,
};
