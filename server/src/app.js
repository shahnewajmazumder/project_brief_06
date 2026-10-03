const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");
const requestLogger = require("./middleware/requestLogger");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(requestLogger);

// Event Routes
app.use("/api/events", eventRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Event Management System API is running highly"
    });
});

module.exports = app;