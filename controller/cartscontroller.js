const db = require("../db/models/index");

// ✅ Add Item to Cart
const addToCart = async (req, res) => {
  try {
    const { user_id, dish_id, quantity } = req.body;

    // Check if item already exists in cart
    let cartItem = await db.Cart.findOne({ where: { user_id, dish_id } });

    if (cartItem) {
      cartItem.quantity += quantity || 1;
      await cartItem.save();
    } else {
      cartItem = await db.Cart.create({
        user_id,
        dish_id,
        quantity: quantity || 1,
      });
    }

    res.status(201).json(cartItem);
  } catch (error) {
    res.status(500).json({ error: "Failed to add item to cart" });
  }
};

// ✅ Get Cart Items for a User
const getCart = async (req, res) => {
  try {
    const { user_id } = req.params;

    const cartItems = await db.Cart.findAll({
      where: { user_id },
      include: [{ model: db.Dishes, as: "dish" }],
    });

    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

// ✅ Remove Item from Cart
const removeFromCart = async (req, res) => {
  try {
    const { id } = req.params;
    await db.Cart.destroy({ where: { id } });
    res.status(200).json({ message: "Item removed from cart" });
  } catch (error) {
    res.status(500).json({ error: "Failed to remove item" });
  }
};

// ✅ Clear Cart for a User
const clearCart = async (req, res) => {
  try {
    const { user_id } = req.params;
    await db.Cart.destroy({ where: { user_id } });
    res.status(200).json({ message: "Cart cleared" });
  } catch (error) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
};

module.exports = { addToCart, getCart, removeFromCart, clearCart };
