const db = require("../db/models/index");

const getAllrestaurant = async (req, res) => {
  try {
    const allRestaurant = await db.Restaurant.findAll();
    console.log("Sending All restaurants", allRestaurant);
    res.json(allRestaurant);
  } catch (error) {
    console.error("Error fetching restaurants", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
module.exports = { getAllrestaurant };
