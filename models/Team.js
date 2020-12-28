const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Team extends Model {
    static associate() {}
  }
  Team.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: DataTypes.STRING,
      members: DataTypes.STRING,
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
