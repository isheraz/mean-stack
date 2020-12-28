const router = require('express').Router();
const commentController = require('../controllers/comment.controller');

router.post('/create', commentController.create);
router.get('/get', commentController.getAll);

module.exports = router;
