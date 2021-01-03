import { body } from 'express-validator';
import { Router } from 'express';
import {
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
  createEvent,
} from '../controllers/event.controller';

const router = Router();

router.post(
  '/createEvent',
  [
    body('name').notEmpty(),
    body('venue').notEmpty(),
    body('desc').notEmpty(),
    body('date').notEmpty(),
  ],
  createEvent
);
router.get('/getEvent/:id', getEventById);
router.get('/getAllEvents', getAllEvents);
router.put('/updateEvent/:id', updateEvent);
router.delete('/deleteEvent/:id', deleteEvent);

export default router;
