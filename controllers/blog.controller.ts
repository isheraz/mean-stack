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

/**
 * @api {get} /blog/get show all Blogs
 * @apiName get
 * @apiGroup Blog
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[{
 *     "id": 5,
 *     "title": "title of the blog",
 *    "description": "description of the blog",
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null  }]
 *
 * @apiSuccess {Objects[]} Blogs Array of blogs
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */

export const Blogs = async (_req, res) => {
  try {
    const blogs = await Blog.findAll({
      include: {
        model: Comment,
        as: 'Comment',
      },
      order: [['id', 'DESC']],
    });
    res.status(SuccessStatusCode).json({ data: blogs });
  } catch (err) {
    res.status(ERRORStatusCode).json({ error: err.message });
  }
};

/**
 * @api {post} /blog/create create blog
 * @apiName createEvent
 * @apiGroup Blog
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} title Blog of the Blog
 * @apiParam {Number} userId userId of the Blog
 * @apiParam {String} description Description of the blog
 * @apiParam {Number} status Status of Blog (0|1)
 *
 *@apiParamExample Request Body:
 *{
 * "title":"name",
 * "userId":1,
 * "description":"description",
 * "status":0|1
 *}
 *
 * @apiSuccess {Number} id Blog Id
 * @apiSuccess {String} title Blog name
 * @apiSuccess {String} description Blog description
 * @apiSuccess {String} status Blog status
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *     "title": "title of the blog",
 *    "description": "description of the blog",
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 *@apiErrorExample Response Body:
 *{
 * "title":"title field is required",
 * "description":"description field is required",
 * "blogId":"Blog id field is required",
 * "status":"status field is required"
 *}
 *
 * @apiError {String} title Blog name
 * @apiError {String} description Blog venue
 * @apiError {String} blogId Blog description
 * @apiError {String} status Blog date
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */

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
/**
 * @api {get} /blog/:id show blog by Id
 * @apiName getBlog
 * @apiGroup Blog
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id blog id is required
 *@apiSuccessExample Response body
 *{
 *  "data": {
 *     "id": 5,
 *     "title": "title of the blog",
 *    "description": "description of the blog",
 *    "userId": 1,
 *    "status": 1,
 *    "updatedAt": "2021-01-05T07:01:49.644Z",
 *    "createdAt": "2021-01-05T07:01:49.644Z",
 *    "deletedAt": null
 *  }
 *}
 *
 * @apiSuccess {Objects} Blog Object of Blog
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "error":"Params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "error":"Blog with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

export const getBlog = async (req, res) => {
  const blog = await Blog.findOne({ where: { id: req.params.id } });
  res.status(SuccessStatusCode).json({ data: blog });
};

/**
 * @api {put} /blog/update/:id update blog
 * @apiName update
  * @apiGroup Blog
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} title Blog of the Blog
 * @apiParam {Number} userId userId of the Blog
 * @apiParam {String} description Description of the blog
 * @apiParam {Number} status Status of Blog (0|1)
  *@apiParamExample Request Body:
 *{
 * "title":"name",
 * "userId":1,
 * "description":"description",
 * "status":0|1
 *}
 *@apiSuccessExample Response Body
 *{
  *  "data": {
   *     "id": 5,
   *     "title": "title of the blog",
  *    "description": "description of the blog",
  *    "userId": 1,
  *    "status": 1,
  *    "updatedAt": "2021-01-05T07:01:49.644Z",
  *    "createdAt": "2021-01-05T07:01:49.644Z",
  *    "deletedAt": null
    }
}
 *
 * @apiSuccess {Object} blog Blog object after updation
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "data":"id params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "data":"Blog with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

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

/**
 * @api {delete} /blog/delete/:id delete blog by id
 * @apiName delete
 * @apiGroup Blog
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id blog id is required
 *@apiSuccessExample Response Body
 *{
 *  "data":"Blog Deleted Successfully."
 *}
 *
 * @apiSuccess {String} message Message after successful deletion
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "error":"id params is required"
 *}
 *@apiError {Number} id params id must be required
 *@apiErrorExample Response Body:
 *{
 * "error":"Blog with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

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
