import { Comment } from '../models';
import defaultResponse from '../utils/defaultResponse';
import constants from '../utils/constants';
import responseStatus from '../utils/responseStatus';

/**
 * @api {post} /comment/create create comment
 * @apiName create
 * @apiGroup Comment
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} text Comment text
 * @apiParam {Number} blogId Blog id
 * @apiParam {Number} userId User id
 *
 *@apiParamExample Request Body:
 *{
 * "text":"comment",
 * "blogId":1,
 * "userId":1,
 *}
 *
 * @apiSuccess {Boolean} error
 * @apiSuccess {String} message Comment message
 * @apiSuccess {data} data
 * @apiSuccessExample Response Body
 * {
 *  "error": false,
 * "message": "Request completed and data saved.",
 * "data": {
 *    "createdAt": "2021-01-05T06:24:28.791Z",
 *   "updatedAt": "2021-01-05T06:24:28.792Z",
 *   "id": 7,
 *   "name": "red",
 *   "deletedAt": null
 *}
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 *@apiErrorExample Response Body:
 *{
 * "text":"text field is required",
 * "blogId":"blogId field is required",
 * "userId":"userId field is required",
 *}
 *
 * @apiError {String} text Comment text
 * @apiError {Number} blogId Blog id
 * @apiError {Number} userId User id
 *
 */
export const create = async (req, res) => {
  const requestBody =
    req.body != null
      ? req.body
      : defaultResponse.error(
          { message: constants.INVALID_BODY },
          res,
          responseStatus.INVALID_BODY
        );
  try {
    const comment = await Comment.create(requestBody);
    if (!comment) {
      defaultResponse.error(
        { message: 'Comment is not posted' },
        res,
        responseStatus.ERROR
      );
    } else {
      defaultResponse.success(
        constants.DATA_SAVED,
        comment,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};
/**
 * @api {get} /comment/get show all comment
 * @apiName getAll
 * @apiGroup Comment
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[{
 *  "id":1
 * "text":"comment",
 * "userId":1,
 * "blogId":"1",
 * "createdAt":"2021-01-05T05:29:25.347Z"
 *}]
 *
 * @apiSuccess {Objects[]} Comments Array of comments
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */
export const getAll = async (_req, res) => {
  try {
    const comments = await Comment.findAll();
    if (!comments) {
      defaultResponse.success(
        constants.DATA_NOT_FOUND,
        null,
        res,
        responseStatus.SUCCESS
      );
    } else {
      defaultResponse.success(
        constants.DATA_RETRIEVED,
        comments,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (excep) {
    defaultResponse.error(
      { messsage: excep.message },
      res,
      responseStatus.ERROR
    );
  }
};

/**
 * @api {put} /comment/update/:id update comment
 * @apiName update
 * @apiGroup Comment
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id event id is required
 * @apiParam {String} text Comment text
 * @apiParam {Number} blogId Blog id
 * @apiParam {Number} userId User id
 *
 *@apiParamExample Request Body:
 *{
 * "text":"comment",
 * "blogId":1,
 * "userId":1,
 *}
 *
 * @apiSuccess {Boolean} error
 * @apiSuccess {String} message Comment message
 * @apiSuccess {data} data
 * @apiSuccessExample Response Body
 * {
 *  "error": false,
 * "message": "Request completed and data saved.",
 * "data": {
 *    "createdAt": "2021-01-05T06:24:28.791Z",
 *   "updatedAt": "2021-01-05T06:24:28.792Z",
 *   "id": 7,
 *   "name": "red",
 *   "deletedAt": null
 *}
 *
 * @apiSuccess {Object} comment Comment object after updation
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
 * "error":"Comment with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
export const update = async (req, res) => {
  const requestBody =
    req.body != null
      ? req.body
      : defaultResponse.error(
          { message: constants.INVALID_BODY },
          res,
          responseStatus.INVALID_BODY
        );
  const id =
    req.params.id != null
      ? req.params.id
      : defaultResponse.error(
          { message: 'Params are Missing' },
          res,
          responseStatus.INVALID_BODY
        );
  try {
    const comment = await Comment.update(requestBody, {
      where: { id },
      returning: true,
      // plain: true,
    });
    if (!comment)
      defaultResponse.error(
        constants.DATA_NOT_FOUND,
        res,
        responseStatus.ERROR
      );
    else
      defaultResponse.success(
        constants.DATA_UPDATED,
        comment,
        res,
        responseStatus.SUCCESS
      );
  } catch (exception) {
    defaultResponse.error(
      { message: exception.message },
      res,
      responseStatus.ERROR
    );
  }
};
/**
 * @api {delete} /comment/delete/:id delete comment by id
 * @apiName delete
 * @apiGroup Comment
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam {Number} id event id is required
 * @apiSuccessExample Response Body
 * {
 *  "error": false,
 * "message": "Comment Deleted Successfully.",
 * "data": {
 *    "createdAt": "2021-01-05T06:24:28.791Z",
 *   "updatedAt": "2021-01-05T06:24:28.792Z",
 *   "id": 7,
 *   "name": "red",
 *   "deletedAt": null
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
 * "error":"Event with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */
export const deleteComment = async (req, res) => {
  const id =
    req.params.id != null
      ? req.params.id
      : defaultResponse.error(
          { message: 'Params are Missing' },
          res,
          responseStatus.INVALID_BODY
        );
  try {
    const comment = await Comment.destroy({
      where: { id },
      // returning: true,
      // plain: true,
    });
    if (!comment) {
      defaultResponse.error(
        { message: constants.DATA_NOT_FOUND },
        res,
        responseStatus.ERROR
      );
    } else {
      defaultResponse.success(
        constants.DATA_DELETED,
        comment,
        res,
        responseStatus.SUCCESS
      );
    }
  } catch (excep) {
    defaultResponse.error(
      { message: excep.message },
      res,
      responseStatus.ERROR
    );
  }
};
