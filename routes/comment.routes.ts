import * as express from 'express';
const router= express.Router();

import commentController from '../controllers/comment.controller';

router.post('/create', commentController.create);
router.get('/get', commentController.getAll);
router.put('/update/:id', commentController.update);
router.delete('/delete/:id', commentController.delete);

export default router;
