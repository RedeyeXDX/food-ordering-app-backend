"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class DishesMenus extends Model {
    static associate(models) {
      models.Menu.belongsToMany(models.Dish, {
        through: DishesMenus,
        foreignKey: "menu_id",
      });
      models.Dish.belongsToMany(models.Menu, {
        through: DishesMenus,
        foreignKey: "dish_id",
      });
    }
  }

  DishesMenus.init(
    {
      menu_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
      dish_id: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "DishesMenus",
    }
  );

  return DishesMenus;
};
