const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 100,
        trim: true
    },

    description: {
        type: String,
        trim: true
    },

    eventDate: {
        type: Date,
        required: true,
        validate: {
            validator: function (value) {
                return value >= new Date(new Date().setHours(0, 0, 0, 0));
            },
            message: "Event date cannot be in the past"
        }
    },

    location: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: String,
        required: true,
        trim: true
    },

    status: {
        type: String,
        required: true,
        default: "upcoming"
    }
});

module.exports = mongoose.model("Event", eventSchema);