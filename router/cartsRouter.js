const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const cartsControlller = require("../controller/cartscontroller.js");
require("dotenv").config();

router.get("/:user_id", authMiddleware, cartsControlller.getCart);

router.post("/add", authMiddleware, cartsControlller.addToCart);

router.delete("/remove", authMiddleware, cartsControlller.removeFromCart);

router.delete("/clear/:user_id", authMiddleware, cartsControlller.clearCart);

router.put("/update", authMiddleware, cartsControlller.updateCart);

module.exports = router;
