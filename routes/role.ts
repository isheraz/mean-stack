import { Router } from 'express';
const router = Router();
import roleController from '../controllers/role.controller';

router.get('/', roleController.role);
router.post('/create', roleController.saveRole);
router.put(
  '/:roleId/permissions/:permissionId',
  roleController.assignPermissionToRole
);

export default router;
