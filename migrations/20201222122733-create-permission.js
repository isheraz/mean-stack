module.exports = {
  up: async (queryInterface, DataType) =>
    queryInterface.createTable('Permissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      name: {
        type: DataType.STRING,
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE,
      },
    }),
  down: async (queryInterface, Sequelize) =>
    queryInterface.dropTable('Permissions'),
};
