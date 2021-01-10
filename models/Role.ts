import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Role extends Model {
    permissions: any;

    name: any;

    static associate(models) {
      Role.belongsToMany(models.Permission, {
        through: 'RoleHasPermissions',
        as: 'permissions',
        foreignKey: 'roleId',
      });

      Role.hasOne(models.UserRole, {
        foreignKey: 'roleId',
        as: 'role',
      });
    }
  }
  Role.init(
    {
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Role',
    }
  );
  return Role;
};
