import { Router } from 'express';
const router = Router();
import permissionController from'../controllers/permission.controller';

router.get('/', permissionController.permission);
router.post('/create', permissionController.savePermission);

export default router;
