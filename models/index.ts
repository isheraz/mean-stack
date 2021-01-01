import * as Seq from 'sequelize';

import Blog from './blog';
import Permission from './permission';
import Role from './role';
import RoleHasPermission from './rolehaspermission';
import UserRole from './userrole';
import User from './user';
import Team from './Team';
import Comment from './Comment';
import config from '../config/config.json';

const { Sequelize } = Seq;
const env = process.env.NODE_ENV || 'development';

const db = null;
let sequelize;

if (config[env].use_env_variable) {
  sequelize = new Sequelize(
    process.env[config[env].use_env_variable],
    config[env]
  );
} else {
  sequelize = new Sequelize(
    config[env].database,
    config[env].username,
    config[env].password,
    config[env]
  );
}

db.Blog = Blog(sequelize, Seq.DataTypes);
db.Permission = Permission(sequelize, Seq.DataTypes);
db.Role = Role(sequelize, Seq.DataTypes);
db.RoleHasPermission = RoleHasPermission(sequelize, Seq.DataTypes);
db.UserRole = UserRole(sequelize, Seq.DataTypes);
db.User = User(sequelize, Seq.DataTypes);
db.Team = Team(sequelize, Seq.DataTypes);
db.Comment = Comment(sequelize, Seq.DataTypes);

db.Comment.associate(db);
db.Blog.associate(db);
db.Team.associate(db);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
