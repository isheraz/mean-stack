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
import UserTeamModel from './UserTeam';
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

const db: any = {
  sequelize,
  Sequelize,
  Blog: BlogModel(sequelize, DataTypes),
  Permission: PermissionModel(sequelize, DataTypes),
  Role: RoleModel(sequelize, DataTypes),
  RoleHasPermission: RoleHasPermissionModel(sequelize, DataTypes),
  UserRole: UserRoleModel(sequelize, DataTypes),
  User: UserModel(sequelize, DataTypes),
  Team: TeamModel(sequelize, DataTypes),
  Comment: CommentModel(sequelize, DataTypes),
  UserTeam: UserTeamModel(sequelize, DataTypes),
  Event: EventModel(sequelize, DataTypes),
  UserTeam: UserTeamModel(sequelize, DataTypes),
};

db.Blog.associate(db);
db.Team.associate(db);
db.Comment.associate(db);
db.User.associate(db);
db.UserRole.associate(db);
db.Permission.associate(db);
db.RoleHasPermission.associate(db);
db.UserTeam.associate(db);
db.Blog.associate(db);
db.Team.associate(db);
// db.User.associate(db);
db.Comment.associate(db);
const {
  Blog,
  Permission,
  Role,
  RoleHasPermission,
  UserRole,
  User,
  Team,
  Comment,
  Event,
} = db;

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
