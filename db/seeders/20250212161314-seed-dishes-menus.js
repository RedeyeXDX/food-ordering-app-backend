"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DishesMenus", [
      {
        menu_id: "797dbd83-d984-4058-8724-fc639049f13c",
        dish_id: "1cc868cd-eddd-4a4c-a326-2e75d2b1a003",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "797dbd83-d984-4058-8724-fc639049f13c",
        dish_id: "1ea3d985-947d-42e9-981f-b811fdad7b14",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "797dbd83-d984-4058-8724-fc639049f13c",
        dish_id: "4972809f-2364-495d-879a-821c0dc942c6",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "a4faba6b-8994-4da4-a7ea-1f5d7c7f9c4f",
        dish_id: "3c500f33-b1d2-46f5-828f-4cd3d02fef3f",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "a4faba6b-8994-4da4-a7ea-1f5d7c7f9c4f",
        dish_id: "86617568-18ce-46c3-8871-69ddc84f47b4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "a4faba6b-8994-4da4-a7ea-1f5d7c7f9c4f",
        dish_id: "f73efb56-68b7-4fa4-9bec-af905e4aa629",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "55cd62fd-9f0b-484d-bb40-6f7c8a30ed00",
        dish_id: "1dd075ae-cb0b-46a5-9a54-790689063311",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "55cd62fd-9f0b-484d-bb40-6f7c8a30ed00",
        dish_id: "e72ea693-f93c-4710-9e9f-ee5bc64260c4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "55cd62fd-9f0b-484d-bb40-6f7c8a30ed00",
        dish_id: "3cfc226e-1e02-4ddf-9210-5d88b29fd97a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DishesMenus", null, {});
  },
};
