const envConfigs= require('./config');
const Sequelize= require('sequelize')
const env = process.env.NODE_ENV || "development";
const config = envConfigs[env];
module.exports= new Sequelize(config.url, config);
