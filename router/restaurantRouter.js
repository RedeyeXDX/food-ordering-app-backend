const router = require("express").Router();

const restaurantcontroller = require("../controller/restaurantcontroller");

router.get("/", restaurantcontroller.getAllrestaurant);

module.exports = router;
