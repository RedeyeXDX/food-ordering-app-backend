const db = require("../db/models/index");

const addToCart = async (req, res) => {
  try {
    const { user_id, dish_id, quantity } = req.body;

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

const getCart = async (req, res) => {
  try {
    const { user_id } = req.params; // Get user_id from URL params

    // Find cart items for the given user_id
    const cartItems = await db.Cart.findAll({
      where: { user_id },
      include: [{ model: db.Dish, as: "dish" }],
    });

    if (!cartItems || cartItems.length === 0) {
      return res.status(200).json(cartItems);
    }

    // Return cart items
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ error: "Failed to fetch cart items" });
  }
};

const removeFromCart = async (req, res) => {
  try {
    const { dish_id, user_id } = req.body; // ✅ Get dish_id from request body

    if (!dish_id || !user_id) {
      return res.status(400).json({ error: "Missing dish_id or user_id" });
    }

    const cartItems = await db.Cart.destroy({ where: { dish_id, user_id } }); // ✅ Delete using dish_id & user_id
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("❌ Error removing item:", error);
    res.status(500).json({ error: "Failed to remove item" });
  }
};

const updateCart = async (req, res) => {
  try {
    const { dish_id, user_id, quantity } = req.body; // ✅ Get dish_id from request body

    if (!dish_id || !user_id || quantity === undefined) {
      return res.status(400).json({ error: "Invalid data" });
    }

    const cartItems = await db.Cart.update(
      { quantity },
      { where: { dish_id, user_id } }
    ); // ✅ Update using dish_id & user_id
    res.status(200).json(cartItems);
  } catch (error) {
    console.error("❌ Error updating cart:", error);
    res.status(500).json({ error: "Failed to update cart item" });
  }
};

const clearCart = async (req, res) => {
  try {
    const { user_id } = req.params;
    const cartItems = await db.Cart.destroy({ where: { user_id } });
    res.status(200).json(cartItems);
  } catch (error) {
    res.status(500).json({ error: "Failed to clear cart" });
  }
};

module.exports = { addToCart, getCart, removeFromCart, clearCart, updateCart };
