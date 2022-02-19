const express = require("express");
const router = express.Router();

const messageController = require("./controllers/messageController");

// general and police
router.post("/", messageController.sendMessage);

module.exports = router;
