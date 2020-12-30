const router = require('express').Router();
const permissionController = require('../controllers/permission.controller');

router.get('/', permissionController.permission);
router.post('/create', permissionController.savePermission);
module.exports = router;
