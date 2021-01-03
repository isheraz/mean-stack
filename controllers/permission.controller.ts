import { Permission } from '../models';

export const GetPermission = async (_req, res) => {
  const permission = await Permission.findAll();
  res.status(200).json({ data: permission });
};

export const SavePermission = async (req, res) => {
  const permission = await Permission.create({
    name: req.body.name,
  });
  res.status(200).json({ data: permission });
};
