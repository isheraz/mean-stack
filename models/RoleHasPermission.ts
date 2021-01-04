import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
