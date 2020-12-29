const { body } = require('express-validator');
const eventController = require('../controllers/eventController');

module.exports = (router) => {
  router.post(
    '/createEvent',
    [
      body('name').notEmpty(),
      body('venue').notEmpty(),
      body('date').notEmpty(),
    ],
    eventController.createEvent
  );
  router.get('/getEvent/:id', eventController.getEventById);
  router.get('/getAllEvents', eventController.getAllEvents);
  router.put('/updateEvent/:id', eventController.updateEvent);
  router.delete('/deleteEvent/:id', eventController.deleteEvent);
  return router;
};
