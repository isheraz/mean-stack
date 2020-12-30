const router = require('express').Router();
const commentController = require('../controllers/comment.controller');

router.post('/create', commentController.create);
router.get('/get', commentController.getAll);
router.put('/update/:id', commentController.update);
router.delete('/delete/:id', commentController.delete);

module.exports = router;
