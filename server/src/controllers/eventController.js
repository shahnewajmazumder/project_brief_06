
const Event = require("../models/Event");

// GET all events
const getEvents = async (req, res) => {
    try {
        const events = await Event.find();

        return res.status(200).json(events);
    } catch (error) {
        return res.status(500).json({
            message: "Error retrieving events",
            error: error.message
        });
    }
};

// GET event by ID
const getEventById = async (req, res) => {
    try {
        const event = await Event.findById(req.params.id);

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        return res.status(200).json(event);
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid event ID"
            });
        }

        return res.status(500).json({
            message: "Error retrieving event",
            error: error.message
        });
    }
};

// POST create event
const createEvent = async (req, res) => {
    try {
        const event = await Event.create(req.body);

        return res.status(201).json({
            message: "Event created successfully",
            event
        });
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Event validation failed",
                error: error.message
            });
        }

        return res.status(500).json({
            message: "Error creating event",
            error: error.message
        });
    }
};

// PUT update event
const updateEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        return res.status(200).json({
            message: "Event updated successfully",
            event
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid event ID"
            });
        }

        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Event validation failed",
                error: error.message
            });
        }

        return res.status(500).json({
            message: "Error updating event",
            error: error.message
        });
    }
};

// DELETE event
const deleteEvent = async (req, res) => {
    try {
        const event = await Event.findByIdAndDelete(req.params.id);

        if (!event) {
            return res.status(404).json({
                message: "Event not found"
            });
        }

        return res.status(200).json({
            message: "Event deleted successfully",
            event
        });
    } catch (error) {
        if (error.name === "CastError") {
            return res.status(400).json({
                message: "Invalid event ID"
            });
        }

        return res.status(500).json({
            message: "Error deleting event",
            error: error.message
        });
    }
};

// Export all controller functions
module.exports = {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
};
