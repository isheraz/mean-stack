import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class UserRole extends Model {
    static associate(models) {
      UserRole.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user',
      });

      UserRole.belongsTo(models.Role, {
        foreignKey: 'roleId',
        as: 'role',
      });
    }
  }
  UserRole.init(
    {
      userId: DataTypes.INTEGER,
      roleId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserRole',
    }
  );
  return UserRole;
};
