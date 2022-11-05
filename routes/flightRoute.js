const express = require('express');

const router = express.Router();
const controller = require('../controllers/flightController');

//add or book flight
router.post("/", controller.bookFlight);

//get all flight
router.get("/", controller.getAllFlight);

//get single flight
router.get("/:title", controller.getSingleFlight);

//update or edit flight
router.patch("/:title", controller.updateFlight); 

//delete flight
router.delete("/:title", controller.deleteFlight);

module.exports = router;

