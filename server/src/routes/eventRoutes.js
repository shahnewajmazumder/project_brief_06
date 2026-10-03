const express = require("express");

const router = express.Router();

const { getEvents } = require("../controllers/eventController");

// GET all events
router.get("/", getEvents);

// GET event by ID
router.get("/:id", (req, res) => {
    res.json({
        message: "Event retrieved successfully",
        eventId: req.params.id
    });
});

// POST create event
router.post("/", (req, res) => {
    res.status(201).json({
        message: "Event created successfully",
        event: req.body
    });
});

// PUT update event
router.put("/:id", (req, res) => {
    res.json({
        message: "Event updated successfully",
        eventId: req.params.id,
        event: req.body
    });
});

// DELETE event
router.delete("/:id", (req, res) => {
    res.json({
        message: "Event deleted successfully",
        eventId: req.params.id
    });
});

module.exports = router;