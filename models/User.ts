import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    password: string;

    userRole: any;

    id: any;

    static associate(models) {
      User.hasOne(models.UserRole, {
        foreignKey: 'userId',
        as: 'userRole',
      });

      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'Comment',
      });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      teamId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'User',
      paranoid: true,
    }
  );
  return User;
};
