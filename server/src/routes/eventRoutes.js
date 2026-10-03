const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        message: "Event routes are working"
    });
});

module.exports = router;