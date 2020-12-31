import { Model } from 'sequelize';

export default (sequelize, DataTypes) => {
  class Blog extends Model {
    static MESSAGE: { error: { statusCode: number; message: string; }; notFound: { statusCode: number; message: string; }; success: { statusCode: number; message: { update: string; delete: string; }; }; invalidData: { statusCode: number; message: string; }; };
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Blog.hasMany(models.Comment, {
        foreignKey: 'blogId',
        as: 'Comment',
      });
    }
  }
  Blog.init(
    {
      title: DataTypes.STRING,
      description: DataTypes.TEXT,
      userId: DataTypes.INTEGER,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Blog',
      paranoid: true,
    }
  );

  const MESSAGE = {
    error: {
      statusCode: 500,
      message: 'Something Went Wrong.',
    },
    notFound: {
      statusCode: 404,
      message: 'No Record Found.',
    },
    success: {
      statusCode: 200,
      message: {
        update: 'Record Updated Successfully.',
        delete: 'Record Deleted Successfully.',
      },
    },
    invalidData: {
      statusCode: 422,
      message: 'Invalid Data.',
    },
  };
  Blog.MESSAGE = MESSAGE;
  return Blog;
};
