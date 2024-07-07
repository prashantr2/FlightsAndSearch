'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Airports', [
      {
        name: 'Kampegowda International Airport', 
        cityId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'IGI Airport', 
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Hindon Airport', 
        cityId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Chattrapati Shivaji Terminal Airport', 
        cityId: 15,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'JollyGrant Airport', 
        cityId: 16,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airports', null, {});
  }
};
