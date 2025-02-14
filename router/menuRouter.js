const router = require("express").Router();

const menuController = require("../controller/menucontroller");

router.get("/:id", menuController.getMenusWithDishes);

module.exports = router;
