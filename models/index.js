const Sequelize = require('sequelize');
require('dotenv').config()

const config = require('../config/config.json')['development'];
const db = {};
console.log(config)
const sequelize = new Sequelize(config.database, config.username, config.password, config);

db['Event'] = require('./event')(sequelize,Sequelize.DataTypes)

Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
