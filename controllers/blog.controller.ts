import { validationResult } from 'express-validator';
import { blogModel } from '../models';
import { Comment } from '../models';
import { validate } from '../routes/blog';

const SuccessStatusCode = blogModel.MESSAGE.success.statusCode;
const SuccessUPDATEMESSAGE = blogModel.MESSAGE.success.message.update;
const SuccessDELETEMESSAGE = blogModel.MESSAGE.success.message.delete;
const ERRORStatusCode = blogModel.MESSAGE.error.statusCode;
const ERRORMESSAGE = blogModel.MESSAGE.error.message;
const INVALIDSTATUSCODE = blogModel.MESSAGE.invalidData.statusCode;
const NOTFOUNDSTATUSCODE = blogModel.MESSAGE.notFound.statusCode;
const NOTFOUNDMESSAGE = blogModel.MESSAGE.notFound.message;

export const Blogs = async (_req, res) => {
  try {
    const blogs = await blogModel.findAll({
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
    validate('Blog');
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
};

export const getBlog = async (req, res) => {
  const blog = await blogModel.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: blog });
};

export const update = async (req, res) => {
  try {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   res.status(INVALIDSTATUSCODE).json({ errors: errors.array() });
    //   return;
    // }
    const blog = await blogModel.findOne({ where: { id: req.params.id } });
    if (!blog) {
      res.status(NOTFOUNDSTATUSCODE).json({ data: NOTFOUNDMESSAGE });
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
};

export const deleteBlog = async (req, res) => {
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
};
