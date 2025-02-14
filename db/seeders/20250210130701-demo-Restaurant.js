"use strict";

const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("Restaurants", [
      {
        id: uuidv4(),
        title: "Kentucky Fried Chicken",
        description: "It's Finger Lickin' Good.",
        imageUrl:
          "https://shanecradock.com/wp-content/uploads/2018/02/KFC_Logo.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "McDonald",
        description: "I'm Lovin' It",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/McDonald%27s_square_2020.svg/1200px-McDonald%27s_square_2020.svg.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        title: "Pizza Hut",
        description: "No one outpizzas the hut",
        imageUrl:
          "https://assets.simpleviewinc.com/simpleview/image/upload/c_limit,q_75,w_1200/v1/crm/laramiewy/pizzahut_8312b8d7-5056-a36f-23a9691d1d55a01d.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
