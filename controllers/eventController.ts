import { validationResult } from 'express-validator';
import { Event } from '../models';

const createEvent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(404).json({ error: errors.array() });
    const event = await Event.create(req.body);
    return res.status(200).json({ event });
  } catch (error) {
    return res.status(500).json({ error });
  }
};

const getAllEvents = async (_req, res) => {
  try {
    const events = await Event.findAll();
    if (events.length > 0) {
      return res.status(200).json({ events });
    }
    return res.status(200).json({ events: [], message: 'No Event Found' });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ error: 'Something Went Wrong Please Try Again' });
  }
};

const getEventById = async (req, res) => {
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

const updateEvent = async (req, res) => {
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

const deleteEvent = async (req, res) => {
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

module.exports = {
  createEvent,
  getEventById,
  getAllEvents,
  updateEvent,
  deleteEvent,
};
