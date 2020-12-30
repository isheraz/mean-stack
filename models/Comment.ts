import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
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
      blogId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
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
