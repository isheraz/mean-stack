import * as express from 'express';
const router= express.Router();
import { body } from 'express-validator';
import blogController from '../controllers/blog.controller'

const validate = (method) => {
  if (method !== 'Blog') return [body('parameters').notFound()];

  return [
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('userId').isInt().notEmpty(),
    body('status').isInt().notEmpty(),
  ];
};

router.get('/get', blogController.Blogs);
router.get('/:id', blogController.getBlog);
router.post('/create', validate('Blog'), blogController.saveBlog);
router.put('/update/:id', validate('Blog'), blogController.update);
router.delete('/delete/:id', blogController.delete);

export default router;
