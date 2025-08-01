"use strict";

const { v4: uuidv4 } = require("uuid");

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("DishesMenus", [
      {
        menu_id: "9f0c0a84-598b-4a73-849c-1b313251e3f7",
        dish_id: "291ecbe4-0a94-41e9-8505-d0a6933dc2cb",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "9f0c0a84-598b-4a73-849c-1b313251e3f7",
        dish_id: "6671b813-f168-4da0-b341-1a329ae0e4b0",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "9f0c0a84-598b-4a73-849c-1b313251e3f7",
        dish_id: "9a13afe8-1043-4217-abe2-f1310af50814",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "452a5df9-838b-433d-a9ca-3e03ad9a96d7",
        dish_id: "675547be-7549-4f2a-a18c-de43d405a8cd",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "452a5df9-838b-433d-a9ca-3e03ad9a96d7",
        dish_id: "a28fc8d8-5150-47b7-beb3-a9bbfe1c887f",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "452a5df9-838b-433d-a9ca-3e03ad9a96d7",
        dish_id: "cb02729b-3922-4bb1-b205-857b0bbe6501",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "d7f73dbf-4260-446f-a93a-aeed7b13195d",
        dish_id: "0c46f6a2-55b7-4bdd-8789-87a3452d297a",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "d7f73dbf-4260-446f-a93a-aeed7b13195d",
        dish_id: "923399cc-d1d5-4ab0-a1aa-336d57703ad8",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        menu_id: "d7f73dbf-4260-446f-a93a-aeed7b13195d",
        dish_id: "9d8b182f-e0d0-4655-85b3-7cc6ca053de9",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("DishesMenus", null, {});
  },
};
