module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.createTable('Comments', {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: Sequelize.STRING,
      blogId: Sequelize.INTEGER,
      userId: Sequelize.INTEGER,
      deletedAt: { type: Sequelize.DATE },
      createdAt: { type: Sequelize.DATE, defaultValue: Date.now },
      updatedAt: { type: Sequelize.DATE, defaultValue: Date.now },
    }),

  down: async (queryInterface, Sequelize) =>
    queryInterface.dropTable('Comments'),
};
