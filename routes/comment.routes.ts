import { Router } from 'express';
import {
  create,
  getAll,
  update,
  deleteComment,
} from '../controllers/comment.controller';

const router = Router();

router.post('/create', create);
router.get('/get', getAll);
router.put('/update/:id', update);
router.delete('/delete/:id', deleteComment);

export default router;
