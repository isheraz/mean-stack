import { Router } from 'express';
import { body } from 'express-validator';
import {
  Blogs,
  getBlog,
  saveBlog,
  update,
  deleteBlog,
} from '../controllers/blog.controller';

const router = Router();

const validate = (method) => {
  if (method !== 'Blog') return [body('parameters').isEmpty()];

  return [
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('userId').isInt().notEmpty(),
    body('status').isInt().notEmpty(),
  ];
};

router.get('/get', Blogs);
router.get('/:id', getBlog);
router.post('/create', validate('Blog'), saveBlog);
router.put('/update/:id', validate('Blog'), update);
router.delete('/delete/:id', deleteBlog);

export default router;
