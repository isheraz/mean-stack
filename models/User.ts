import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class User extends Model {
    password: string;
    id: any;

    name: any;

    email: any;

    static associate(models) {
      User.hasOne(models.UserRole, {
        foreignKey: 'userId',
        as: 'userRole',
      });

      User.hasMany(models.Comment, {
        foreignKey: 'userId',
        as: 'Comment',
      });

      User.belongsToMany(models.Team, { through: 'UserTeam' });
    }
  }
  User.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'User',
      paranoid: true,
    }
  );
  return User;
};
