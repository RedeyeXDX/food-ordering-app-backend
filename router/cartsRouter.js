const router = require("express").Router();
const authMiddleware = require("../middleware/authMiddleware");
const cartsControlller = require("../controller/cartscontroller.js");

router.get("/:user_id", authMiddleware, cartsControlller.getCart);

router.post("/add", authMiddleware, cartsControlller.addToCart);

router.delete("/remove/:id", authMiddleware, cartsControlller.removeFromCart);

router.delete("/clear/:user_id", authMiddleware, cartsControlller.clearCart);

module.exports = router;
