const router = require('express').Router();
const roleController = require('../controllers/role.controller');

router.get('/', roleController.role);
router.post('/create', roleController.saveRole);
router.put(
  '/:roleId/permissions/:permissionId',
  roleController.assignPermissionToRole
);

module.exports = router;
