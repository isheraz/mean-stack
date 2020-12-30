const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class RoleHasPermission extends Model {
    static associate(models) {}
  }
  RoleHasPermission.init(
    {
      roleId: DataTypes.INTEGER,
      permissionId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'RoleHasPermission',
      tableName: 'RoleHasPermissions',
    }
  );
  return RoleHasPermission;
};
