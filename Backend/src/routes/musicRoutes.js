const express = require("express");
const route = express.Router();
const musicController = require("../controller/musicController");

const authenticateToken = require("../middleware/authenticateToken");


route.get("/", authenticateToken, musicController.getAllMusic); // Route to fetch all movies



module.exports = route;