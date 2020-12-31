export default {
  up: async (queryInterface, DataType) => {
    await queryInterface.createTable('RoleHasPermissions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataType.INTEGER,
      },
      roleId: {
        allowNull: false,
        type: DataType.INTEGER,
      },
      permissionId: {
        allowNull: false,
        type: DataType.INTEGER,
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('RoleHasPermissions');
  },
};
