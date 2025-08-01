"use strict";
const { v4: uuidv4 } = require("uuid");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Dishes", [
      {
        id: uuidv4(),
        food_name: "Big Mac",
        restaurant_id: "009548c2-d03b-4c0d-9a79-17f8c477d361",
        img_url:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-double-big-mac-1:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "Chicken McNuggets",
        restaurant_id: "009548c2-d03b-4c0d-9a79-17f8c477d361",
        img_url:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-Chicken-McNuggets-6-pieces-2:1-3-product-tile-desktop?wid=829&hei=515&dpr=off",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "McSpicy",
        restaurant_id: "009548c2-d03b-4c0d-9a79-17f8c477d361",
        img_url:
          "https://s7d1.scene7.com/is/image/mcdonalds/mcdonalds-mcspicy-april-promo:nutrition-calculator-tile?wid=822&hei=822&dpr=off",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "5PC Chicken Bucket",
        restaurant_id: "e77e77e8-5afc-400f-a5f4-64f7c2fd3af3",
        img_url:
          "https://static.kfc.com.sg/images/items/lg/5pcsCknBucket.jpg?v=4l8bl4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "Zinger",
        restaurant_id: "e77e77e8-5afc-400f-a5f4-64f7c2fd3af3",
        img_url:
          "https://static.kfc.com.sg/images/items/lg/ZingerALC.jpg?v=4l8bl4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "BBQ Pockett",
        restaurant_id: "e77e77e8-5afc-400f-a5f4-64f7c2fd3af3",
        img_url:
          "https://static.kfc.com.sg/images/items/lg/BBQPockettALC.jpg?v=4l8bl4",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "Hawaiian Pizza",
        restaurant_id: "d49e8f3d-1a63-4b9c-96b9-090198c729f1",
        img_url:
          "https://content.pizzahut.com.au/f/49069/1800x1800/1af6fe5a45/hawaiian-lge-products.png",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "Beef Pepperoni Pizza",
        restaurant_id: "d49e8f3d-1a63-4b9c-96b9-090198c729f1",
        img_url:
          "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F08%2Fpizza-hut-introduces-beyond-meat-pepperoni-pizza-tw.jpg?w=960&cbr=1&q=90&fit=max",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: uuidv4(),
        food_name: "Four Cheese Pizza",
        restaurant_id: "d49e8f3d-1a63-4b9c-96b9-090198c729f1",
        img_url:
          "https://img.freepik.com/premium-photo/four-cheese-pizza-perfection-side-view_1170794-94495.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Dishes", null, {});
  },
};
