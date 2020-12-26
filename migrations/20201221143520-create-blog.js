module.exports = {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('Blogs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataType.STRING,
      },
      description: {
        allowNull: false,
        type: DataType.TEXT,
      },
      userId: {
        allowNull: false,
        type: DataType.INTEGER,
      },
      status: {
        type: DataType.INTEGER,
      },
      deletedAt: {
        type: DataType.DATE,
      },
      createdAt: {
        allowNull: false,
        type: DataType.DATE(3),
      },
      updatedAt: {
        allowNull: false,
        type: DataType.DATE(3),
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Blogs');
  },
};
