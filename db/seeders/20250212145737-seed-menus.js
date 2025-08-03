"use strict";
const ids = require("../seeders/seed.ids");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Menu", [
      {
        id: ids.KFC_MENU_ID,
        name: "KFC Menus",
        restaurant_id: ids.KFC_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: ids.MCDONALD_MENU_ID,
        name: "McDonald Menu",
        restaurant_id: ids.MCDONALD_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: ids.PIZZAHUT_MENU_ID,
        name: "Pizza Hut Menu",
        restaurant_id: ids.PIZZAHUT_ID,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menu", null, {});
  },
};
