
const express = require("express");

const router = express.Router();

const {
    getEvents,
    getEventById,
    createEvent,
    updateEvent,
    deleteEvent
} = require("../controllers/eventController");

// GET all events
router.get("/", getEvents);

// GET a single event by ID
router.get("/:id", getEventById);

// POST create a new event
router.post("/", createEvent);

// PUT update an existing event
router.put("/:id", updateEvent);

// DELETE an event by ID
router.delete("/:id", deleteEvent);

module.exports = router;
