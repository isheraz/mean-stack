export const up = async (queryInterface, DataType) => {
  await queryInterface.createTable('Permissions', {
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
  });
};

export const down = async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Permissions');
};
