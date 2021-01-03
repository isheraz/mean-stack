import { Router } from 'express';
import {
  assignPermissionToRole,
  saveRole,
  getRole,
} from '../controllers/role.controller';

const router = Router();

router.get('/', getRole);
router.post('/create', saveRole);
router.put('/:roleId/permissions/:permissionId', assignPermissionToRole);

export default router;
