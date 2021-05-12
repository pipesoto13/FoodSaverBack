'use strict';
const faker = require('faker')

const users = Array.from({ length: 10 }, () => {
  return {
    name: faker.name.firstName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    address: faker.address.streetAddress(),
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
    await queryInterface.bulkInsert('users', users, {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {})
  }
};
