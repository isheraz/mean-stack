const router = require('express').Router();
const teamController = require('../controllers/team.controller');

router.get('/get', teamController.getTeam);
router.post('/create', teamController.saveTeam);
router.put('/update/:id', teamController.update);
router.delete('/delete/:id', teamController.delete);

module.exports = router;
