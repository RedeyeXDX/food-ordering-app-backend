"use strict";

const ids = require("../seeders/seed.ids");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DishesMenus", [
      {
        menu_id: ids.KFC_MENU_ID,
        dish_id: ids.Chicken_Bucket_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.KFC_MENU_ID,
        dish_id: ids.ZINGER_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.KFC_MENU_ID,
        dish_id: ids.BBQ_POCKETT_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.MCDONALD_MENU_ID,
        dish_id: ids.BIGMAC_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.MCDONALD_MENU_ID,
        dish_id: ids.NUGGETS_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.MCDONALD_MENU_ID,
        dish_id: ids.MCSPICY_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.PIZZAHUT_MENU_ID,
        dish_id: ids.Hawaiian_Pizza_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.PIZZAHUT_MENU_ID,
        dish_id: ids.Beef_Pepperoni_Pizza_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: ids.PIZZAHUT_MENU_ID,
        dish_id: ids.Four_Cheese_Pizza_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DishesMenus", null, {});
  },
};
