const routes = require('express').Router();
const { body, validationResult } = require('express-validator');

const blogModel = require('../models').Blog;
const { Comment } = require('../models');

const validate = (method) => {
  if (method !== 'Blog') return [body('parameters').notFound()];

  return [
    body('title').notEmpty(),
    body('description').notEmpty(),
    body('userId').isInt().notEmpty(),
    body('status').isInt().notEmpty(),
  ];
};

const SuccessStatusCode = blogModel.MESSAGE.success.statusCode;
const SuccessUPDATEMESSAGE = blogModel.MESSAGE.success.message.update;
const SuccessDELETEMESSAGE = blogModel.MESSAGE.success.message.delete;
const ERRORStatusCode = blogModel.MESSAGE.error.statusCode;
const ERRORMESSAGE = blogModel.MESSAGE.error.message;
const INVALIDSTATUSCODE = blogModel.MESSAGE.invalidData.statusCode;
const NOTFOUNDSTATUSCODE = blogModel.MESSAGE.notFound.statusCode;
const NOTFOUNDMESSAGE = blogModel.MESSAGE.notFound.message;

routes.get('/', async (_req, res) => {
  try {
    const blogs = await blogModel.findAll({
      include: {
        model: Comment,
        as: 'Comment',
      },
    });
    res.status(SuccessStatusCode).json({ data: blogs });
  } catch (err) {
    console.log(err);
    res.status(ERRORStatusCode).json({ error: err.message });
  }
});

routes.post('/create', validate('Blog'), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
      return;
    }

    const newBlog = await blogModel.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
      status: req.body.status,
    });
    res.json({ data: newBlog });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
});

routes.get('/:id', async (req, res) => {
  const blog = await blogModel.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: blog });
});

routes.put('/update/:id', validate('Blog'), async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
      return;
    }
    await blogModel.update(
      {
        title: req.body.title,
        description: req.body.description,
        userId: req.body.userId,
        status: req.body.status,
      },
      { where: { id: req.params.id } }
    );
    res.status(SuccessStatusCode).json({ data: SuccessUPDATEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
});

routes.delete('/delete/:id', async (req, res) => {
  try {
    const blog = await blogModel.findOne({ where: { id: req.params.id } });
    if (!blog) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await blogModel.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(SuccessStatusCode).json({ data: SuccessDELETEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
});

module.exports = routes;
