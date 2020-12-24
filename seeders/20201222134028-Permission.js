'use strict';

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
    return queryInterface.bulkInsert('Permissions', [{
      name: 'Users',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Blogs',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Edit-Blog',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Delete-Blog',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Comments',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Teams',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Events',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Edit-Event',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Delete-Event',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return queryInterface.bulkDelete('Permissions', null, {});
  }
};
