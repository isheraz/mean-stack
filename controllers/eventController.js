const Event = require('../models').Event;

const createEvent = async (req,res)=>{
    try {
        const event = await Event.create(req.body)
        return res.status(200).json({event})
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong Please Try Again'})
    }
}

const getAllEvents = async (req,res) => {
    try {
        const events = await Event.findAll();
        return res.status(200).json({events})
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong Please Try Again'})

    }
}

const getEventById = async (req,res) => {
    try {
        const {id} = req.params;

        const event = await Event.findOne({where:{id:id}});
        if(event) return res.status(200).json({event});
        return res.status(404).json({error:'Event with this id not found'}); 
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong Please Try Again'})

    }
}

const updateEvent = async (req,res)=>{
    try {
        const {id} = req.params;
        const [update] = await Event.update(req.body,{
            where: {id:id}
        })
        if(update){
            const updatedEvent = await Event.findOne({where: {id:id}});
            return res.status(201).json({updatedEvent});
        }
         return res.status(404).json({error:'Event with this id not found'}); 
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong Please Try Again'})
        
    }
}

const deleteEvent = async (req,res)=>{
    try {
        const {id} = req.params;
        const deleted = await Event.destroy({where: {id:id}});
        if(deleted) return res.status(200).json({message:'Event Deleted Successfully'});
        return res.status(404).json({ error:'Event with this id not found'});
    } catch (error) {
        return res.status(500).json({error:'Something Went Wrong Please Try Again'})

    }
}

module.exports ={
    createEvent,
    getEventById,
    getAllEvents,
    updateEvent,
    deleteEvent
}
