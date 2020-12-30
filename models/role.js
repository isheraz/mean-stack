const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Role extends Model {
    
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
