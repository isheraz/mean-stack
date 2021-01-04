import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Team extends Model {
    static associate(models) {
      Team.belongsToMany(models.User, { through: 'UserTeam' });
    }
  }
  Team.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: Date.now },
      updatedAt: { type: DataTypes.DATE, defaultValue: Date.now },
      deletedAt: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'Team',
      paranoid: true,
    }
  );
  return Team;
};
