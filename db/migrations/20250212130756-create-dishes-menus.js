"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("DishesMenus", {
      menu_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Menu", key: "id" },
        onDelete: "CASCADE",
      },
      dish_id: {
        type: Sequelize.UUID,
        allowNull: false,
        references: { model: "Dishes", key: "id" },
        onDelete: "CASCADE",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("DishesMenus");
  },
};
