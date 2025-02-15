"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Dish extends Model {
    static associate(models) {
      Dish.belongsToMany(models.Menu, {
        through: models.DishesMenus,
        foreignKey: "dish_id",
        as: "menus",
      });

      Dish.belongsTo(models.Restaurant, {
        foreignKey: "restaurant_id",
        as: "restaurant",
      });
      Dish.hasMany(models.Cart, { foreignKey: "dish_id", as: "cartItems" });
    }
  }
  Dish.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      food_name: { type: DataTypes.STRING, allowNull: false },
      restaurant_id: { type: DataTypes.UUID, allowNull: false },
      img_url: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Dish",
    }
  );
  return Dish;
};
