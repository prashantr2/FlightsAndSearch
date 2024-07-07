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
     await queryInterface.bulkInsert('Airplanes', [
      {
        modelNumber: 'Boeing 737-800',
        capacity: 170,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Airbus A320',
        capacity: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Boeing 777-300ER',
        capacity: 400,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Airbus A380',
        capacity: 700,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        modelNumber: 'Embrarer E195-E2',
        capacity: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Airplanes', null, {});
  }
};
