const db = require("../db/models/index");

const getMenusWithDishes = async (req, res) => {
  try {
    const { id } = req.params;
    const menus = await db.Menu.findAll({
      where: { restaurant_id: id },
      include: [
        {
          model: db.Dish,
          through: { attributes: [] },
          as: "Dishes",
        },
      ],
    });

    res.status(200).json(menus);
  } catch (error) {
    console.error("Error fetching menus:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getMenusWithDishes };
