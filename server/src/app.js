const express = require("express");
const cors = require("cors");

const eventRoutes = require("./routes/eventRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Event Routes
app.use("/api/events", eventRoutes);

// Home Route
app.get("/", (req, res) => {
    res.json({
        message: "Event Management System API is running highly"
    });
});

module.exports = app;