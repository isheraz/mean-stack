const eventController = require('../controllers/eventController');
module.exports = (router)=>{
    router.post('/createEvent',eventController.createEvent)
    router.get('/getEvent/:id',eventController.getEventById)
    router.get('/getAllEvents',eventController.getAllEvents)
    router.put('/updateEvent/:id',eventController.updateEvent)
    router.delete('/deleteEvent/:id',eventController.deleteEvent)
    return router;
}
