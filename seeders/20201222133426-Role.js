module.exports = {
  up: async (queryInterface, Sequelize) =>
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    queryInterface.bulkInsert('Roles', [
      {
        name: 'Super-Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Editor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Subscriber',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Guest',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]),

  down: async (queryInterface, Sequelize) =>
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    queryInterface.bulkDelete('Roles', null, {}),
};
