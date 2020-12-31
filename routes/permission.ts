import * as express from 'express';
const router= express.Router();
import permissionController from'../controllers/permission.controller';

router.get('/', permissionController.permission);
router.post('/create', permissionController.savePermission);

export default router;
