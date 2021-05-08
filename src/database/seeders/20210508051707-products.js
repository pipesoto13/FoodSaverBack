'use strict';
const faker = require('faker')

const products = Array.from({ length: 10 }, () => {
  return {
    name: faker.commerce.product(),
    description: faker.lorem.sentence(),
    price: faker.commerce.price(),
    weight: faker.datatype.float(),
    expDate: faker.datatype.datetime(),
    SellerId: Math.ceil(Math.random() * 10),
    createdAt: new Date(),
    updatedAt: new Date(),
  }
})

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('products', products, {})

  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('products', null, {})
  }
};
