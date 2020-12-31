import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Permission extends Model {
    static associate(models) {
      Permission.belongsToMany(models.Role, {
        through: 'RoleHasPermissions',
        as: 'role',
        foreignKey: 'permissionId',
      });
    }
  }
  Permission.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Permission',
    }
  );
  return Permission;
};
