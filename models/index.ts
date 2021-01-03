import { Sequelize, DataTypes } from 'sequelize';

import BlogModel from './Blog';
import PermissionModel from './Permission';
import RoleModel from './Role';
import RoleHasPermissionModel from './RoleHasPermission';
import UserRoleModel from './UserRole';
import UserModel from './User';
import TeamModel from './Team';
import CommentModel from './Comment';
import EventModel from './Event';

import config from '../config/config.json';

const env = process.env.NODE_ENV || 'development';

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

const Blog = BlogModel(sequelize, DataTypes);
const Permission = PermissionModel(sequelize, DataTypes);
const Role = RoleModel(sequelize, DataTypes);
const RoleHasPermission = RoleHasPermissionModel(sequelize, DataTypes);
const UserRole = UserRoleModel(sequelize, DataTypes);
const User = UserModel(sequelize, DataTypes);
const Team = TeamModel(sequelize, DataTypes);
const Comment = CommentModel(sequelize, DataTypes);
const Event = EventModel(sequelize, DataTypes);

// db.Comment.associate(db);
// db.Blog.associate(db);
// db.Team.associate(db);

// db.sequelize = sequelize;
// const Sequelize = Sequelize;

export {
  Blog,
  Role,
  RoleHasPermission,
  UserRole,
  User,
  Comment,
  Team,
  Permission,
  Event,
};
