const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require(`../config/config.json`)[env];

const db = {};
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.Blog = require('./blog')(sequelize, Sequelize.DataTypes);
db.Permission = require('./permission')(sequelize, Sequelize.DataTypes);
db.Role = require('./role')(sequelize, Sequelize.DataTypes);
db.RoleHasPermission = require('./rolehaspermission')(
  sequelize,
  Sequelize.DataTypes
);
db.User = require('./user')(sequelize, Sequelize.DataTypes);
db.UserRole = require('./userrole')(sequelize, Sequelize.DataTypes);
db.Event = require('./event')(sequelize, Sequelize.DataTypes);
// Accociation
db.User.associate(db);
db.UserRole.associate(db);
db.Blog.associate(db);
db.Permission.associate(db);
db.RoleHasPermission.associate(db);
db.Role.associate(db);
db.sequelize = sequelize;
db.Sequelize = Sequelize;
module.exports = db;
