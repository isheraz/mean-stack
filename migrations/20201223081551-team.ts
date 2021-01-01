export default{
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Teams', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      deletedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now },
    }),

  down: async (queryInterface, Sequelize) => queryInterface.dropTable('Teams'),
};
