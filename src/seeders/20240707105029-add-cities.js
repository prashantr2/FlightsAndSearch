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
    // await queryInterface.bulkInsert('Cities', [
    //   { name: 'New Delhi' }, 
    //   { name: 'Varanasi' }, 
    //   { name: 'Bangalore' },
    //   { name: 'Patna' },   
    //   { name: 'Chennai' },
    //   { name: 'Chandigarh' }, 
    //   { name: 'Agra' },      
    //   { name: 'Kolkata' },  
    //   { name: 'Goa' },     
    //   { name: 'Indore' }, 
    //   { name: 'Mumbai' },
    //   { name: 'Dehradun' },
    //  ], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    // await queryInterface.bulkDelete('Cities', null, {});
  }
};
