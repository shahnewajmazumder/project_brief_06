const getEvents = (req, res) => {
    res.json({
        message: "Events retrieved successfully"
    });
};

const getEventById = (req, res) => {
    const eventId = req.params.id;

    res.json({
        message: "Event retrieved successfully",
        eventId: eventId
    });
};

module.exports = {
    getEvents,
    getEventById
};