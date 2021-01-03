import { validationResult } from 'express-validator';

import { Blog, Comment } from '../models';
import validate from '../routes/blog.routes';

const SuccessStatusCode = Blog.MESSAGE.success.statusCode;
const SuccessUPDATEMESSAGE = Blog.MESSAGE.success.message.update;
const SuccessDELETEMESSAGE = Blog.MESSAGE.success.message.delete;
const ERRORStatusCode = Blog.MESSAGE.error.statusCode;
const ERRORMESSAGE = Blog.MESSAGE.error.message;
const INVALIDSTATUSCODE = Blog.MESSAGE.invalidData.statusCode;
const NOTFOUNDSTATUSCODE = Blog.MESSAGE.notFound.statusCode;
const NOTFOUNDMESSAGE = Blog.MESSAGE.notFound.message;

export const Blogs = async (_req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: {
        model: Comment,
        as: 'Comment',
      },
    });
    res.status(SuccessStatusCode).json({ data: blogs });
  } catch (err) {
    res.status(ERRORStatusCode).json({ error: err.message });
  }
};

export const saveBlog = async (req, res) => {
  try {
    validate.all('Blog');
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
      return;
    }

    const newBlog = await Blog.create({
      title: req.body.title,
      description: req.body.description,
      userId: req.body.userId,
      status: req.body.status,
    });
    res.json({ data: newBlog });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};

export const getBlog = async (req, res) => {
  const blog = await Blog.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: blog });
};

export const update = async (req, res) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
    //   return;
    // }
    const blog = await Blog.findOne({ where: { id: req.params.id } });
    if (!blog) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Blog.update(
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
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findOne({ where: { id: req.params.id } });
    if (!blog) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
    }
    await Blog.destroy({
      where: {
        id: req.params.id,
      },
    });
    res.status(SuccessStatusCode).json({ data: SuccessDELETEMESSAGE });
  } catch (err) {
    res.json({ data: ERRORMESSAGE });
  }
};
