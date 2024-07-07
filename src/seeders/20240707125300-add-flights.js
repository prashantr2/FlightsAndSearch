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
    await queryInterface.bulkInsert('Flights', [
      {
        flightNumber: "UK 900",
        airplaneId: 21,
        departureAirportId: 41,
        arrivalAirportId: 44,
        departureTime: "2024-07-07 12:00:00",
        arrivalTime: "2024-07-07 14:30:00",
        price: 4300,
        totalSeats: 170,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "UK 715",
        airplaneId: 25,
        departureAirportId: 42,
        arrivalAirportId: 44,
        departureTime: "2024-07-07 18:00:00",
        arrivalTime: "2024-07-07 20:30:00",
        price: 4500,
        totalSeats: 130,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        flightNumber: "ASK 598",
        airplaneId: 23,
        departureAirportId: 40,
        arrivalAirportId: 44,
        departureTime: "2024-07-08 02:00:00",
        arrivalTime: "2024-07-08 05:00:00",
        price: 7800,
        totalSeats: 400,
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
    // await queryInterface.bulkDelete('Flights', null, {});
  }
};
