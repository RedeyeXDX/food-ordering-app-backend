"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Menu", [
      {
        id: uuidv4(),
        name: "KFC Menus",
        restaurant_id: "e77e77e8-5afc-400f-a5f4-64f7c2fd3af3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "McDonald Menu",
        restaurant_id: "009548c2-d03b-4c0d-9a79-17f8c477d361",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        name: "Pizza Hut Menu",
        restaurant_id: "d49e8f3d-1a63-4b9c-96b9-090198c729f1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Menu", null, {});
  },
};
