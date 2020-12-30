const { validationResult } = require('express-validator');
const blogModel = require('../models').Blog;
const { Comment } = require('../models');

const SuccessStatusCode = blogModel.MESSAGE.success.statusCode;
const SuccessUPDATEMESSAGE = blogModel.MESSAGE.success.message.update;
const SuccessDELETEMESSAGE = blogModel.MESSAGE.success.message.delete;
const ERRORStatusCode = blogModel.MESSAGE.error.statusCode;
const ERRORMESSAGE = blogModel.MESSAGE.error.message;
const INVALIDSTATUSCODE = blogModel.MESSAGE.invalidData.statusCode;
const NOTFOUNDSTATUSCODE = blogModel.MESSAGE.notFound.statusCode;
const NOTFOUNDMESSAGE = blogModel.MESSAGE.notFound.message;

exports.Blogs = async (_req, res) => {
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

exports.saveBlog = async (req, res) => {
  try {
    this.validate('Blog');
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

exports.getBlog = async (req, res) => {
  const blog = await blogModel.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: blog });
};

exports.update = async (req, res) => {
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

exports.delete = async (req, res) => {
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
