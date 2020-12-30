const router = require('express').Router();
const { body } = require('express-validator');
const blogController = require('../controllers/blog.controller');

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

module.exports = router;
