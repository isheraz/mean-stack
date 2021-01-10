import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class UserTeam extends Model {
    static associate(models) {
      // models.User.belongsToMany(models.User, { through: UserTeam });
      // models.Team.belongsToMany(models.Team, { through: UserTeam });
    }
  }
  UserTeam.init(
    {
      TeamId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'UserTeam',
      tableName: 'UserTeams',
    }
  );
  return UserTeam;
};
