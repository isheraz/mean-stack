import { validationResult } from 'express-validator';
import { Event } from '../models';

/**
 * @api {post} /events/createEvent create event
 * @apiName createEvent
 * @apiGroup Event
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 * @apiParam {String} name Name of the Event
 * @apiParam {String} venue Place where you organize event
 * @apiParam {String} desc Description of the event
 * @apiParam {Date} date Date of the event
 *
 *@apiParamExample Request Body:
 *{
 * "name":"name",
 * "venue":"location",
 * "desc":"description",
 * "date":"2021-01-05T05:29:25.347Z"
 *}
 *
 * @apiSuccess {String} id Event Id
 * @apiSuccess {String} name Event name
 * @apiSuccess {String} venue Event venue
 * @apiSuccess {String} desc Event description
 * @apiSuccess {String} date Event date
 *
 *@apiErrorExample Response Body:
 *{
 * "name":"name field is required",
 * "venue":"venue field is required",
 * "desc":"desc field is required",
 * "date":"date field is required"
 *}
 *
 * @apiError {String} name Event name
 * @apiError {String} venue Event venue
 * @apiError {String} desc Event description
 * @apiError {String} date Event date
 *
 */

export const createEvent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) res.status(404).json({ error: errors.array() });
    const event = await Event.create(req.body);
    res.status(200).json({ event });
  } catch (error) {
    res.status(500).json({ error });
  }
};

/**
 * @api {get} /events/getAllEvents show all event
 * @apiName getAllEvents
 * @apiGroup Event
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 *
 *@apiSuccessExample Response Body
 *[{
 *  "id":1
 * "name":"name",
 * "venue":"location",
 * "desc":"description",
 * "date":"2021-01-05T05:29:25.347Z",
 * "createdAt":"2021-01-05T05:29:25.347Z"
 *}]
 *
 * @apiSuccess {Objects[]} Events Array of events
 *
 *@apiErrorExample Response Body:
 *{
 * "message":"access denied"
 *}
 *@apiError {String} Authorization authorization is missing or invalid
 */

export const getAllEvents = async (_req, res) => {
  try {
    const events = await Event.findAll();
    if (events.length > 0) {
      res.status(200).json({ events });
    }
    res.status(200).json({ events: [], message: 'No Event Found' });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: 'Something Went Wrong Please Try Again' });
  }
};
/**
 * @api {get} /events/getEvent/:id show event by Id
 * @apiName getEventById
 * @apiGroup Event
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id event id is required
 *@apiSuccessExample Response Body
 *{
 *  "id":1
 * "name":"name",
 * "venue":"location",
 * "desc":"description",
 * "date":"2021-01-05T05:29:25.347Z",
 * "createdAt":"2021-01-05T05:29:25.347Z"
 *}
 *
 * @apiSuccess {Objects} Events Array of events
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
 * "error":"Event with this id not found"
 *}
 *@apiError {Number} id params id is invalid
 */

export const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: 'id must be number' });
    const event = await Event.findOne({ where: { id } });
    if (event) return res.status(200).json({ event });
    return res.status(404).json({ error: 'Event with this id not found' });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something Went Wrong Please Try Again' });
  }
};
/**
 * @api {put} /events/updateEvent/:id update event
 * @apiName updateEvent
 * @apiGroup Event
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id event id is required
 *
 * @apiParam {String} name Name of the Event
 * @apiParam {String} venue Place where you organize event
 * @apiParam {String} desc Description of the event
 * @apiParam {Date} date Date of the event
 *@apiParamExample Request Body:
 *{
 * "name":"name",
 * "venue":"location",
 * "desc":"description",
 * "date":"2021-01-05T05:29:25.347Z"
 *}
 *@apiSuccessExample Response Body
 *{
 *  "id":1
 * "name":"name",
 * "venue":"location",
 * "desc":"description",
 * "date":"2021-01-05T05:29:25.347Z",
 * "createdAt":"2021-01-05T05:29:25.347Z"
 *}
 *
 * @apiSuccess {Object} event Event object after updation
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

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: 'id must be number' });
    const [update] = await Event.update(req.body, {
      where: { id },
    });
    if (update) {
      const updatedEvent = await Event.findOne({ where: { id } });
      return res.status(201).json({ updatedEvent });
    }
    return res.status(404).json({ error: 'Event with this id not found' });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something Went Wrong Please Try Again' });
  }
};
/**
 * @api {delete} /events/deleteEvent/:id delete event by id
 * @apiName deleteEvent
 * @apiGroup Event
 *@apiVersion 0.1.0
 * @apiHeader (Header) {String} authorization Authorization Bearer token
 * @apiParam (Params) {Number} id event id is required
 *@apiSuccessExample
 *{
 *  "id":1
 * "name":"name",
 * "venue":"location",
 * "desc":"description",
 * "date":"2021-01-05T05:29:25.347Z",
 * "createdAt":"2021-01-05T05:29:25.347Z"
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

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(404).json({ error: 'id must be number' });
    const deleted = await Event.destroy({ where: { id } });
    if (deleted)
      return res.status(200).json({ message: 'Event Deleted Successfully' });
    return res.status(404).json({ error: 'Event with this id not found' });
  } catch (error) {
    return res
      .status(500)
      .json({ error: 'Something Went Wrong Please Try Again' });
  }
};
