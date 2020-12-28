const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate() {}
  }
  Comment.init(
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      text: DataTypes.STRING,
      createdAt: { type: DataTypes.DATE, defaultValue: Date.now },
      updatedAt: { type: DataTypes.DATE, defaultValue: Date.now },
      deletedAt: { type: DataTypes.DATE },
    },
    {
      sequelize,
      modelName: 'Comment',
      paranoid: true,
    }
  );
  return Comment;
};
