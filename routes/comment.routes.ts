import * as express from 'express';
const router= express.Router();
<<<<<<< HEAD:routes/comment.routes.ts

=======
>>>>>>> 1c13ccac499dadd4df7484ac4a5260113b6bc523:routes/comment.routes.js
import commentController from '../controllers/comment.controller';

router.post('/create', commentController.create);
router.get('/get', commentController.getAll);
router.put('/update/:id', commentController.update);
router.delete('/delete/:id', commentController.delete);

export default router;
