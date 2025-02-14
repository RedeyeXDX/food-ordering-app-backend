"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Menu", "restaurant_id", {
      type: Sequelize.UUID,
      allowNull: true,
      references: {
        model: "Restaurants", // This should match your restaurants table name
        key: "id",
      },
      onDelete: "CASCADE",
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Menu", "restaurant_id");
  },
};
