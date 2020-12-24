const {
    Model,
  } = require('sequelize');
  
  module.exports = (sequelize, DataTypes) => {
    class Team extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        // define association here
      }
    }
    Team.init({
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: DataTypes.STRING,
        members: DataTypes.STRING,
        createdAt:{type: DataTypes.DATE, defaultValue: Date.now},
        updatedAt:{type: DataTypes.DATE, defaultValue: Date.now}
    }, {
      sequelize,
      modelName: 'Team',
      paranoid: true,
    });
    return Team;
  };
  
// const Sequelize = require('sequelize');
// const db = require('../config/connection');

// const team = db.define('Team', {
//     id: {
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         primaryKey: true,
        
//     },
//     name: Sequelize.STRING,
//     members: Sequelize.STRING,
//     createdAt:{type: Sequelize.DATE, defaultValue: Date.now},
//     updatedAt:{type: Sequelize.DATE, defaultValue: Date.now}
// });
// module.exports = team;
