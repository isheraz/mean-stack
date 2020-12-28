require('dotenv').config();

exports.module = {
  local: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PG_PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
    dialect: process.env.DIALECT || 'postgres',
  },
  staging: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PG_PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
    dialect: process.env.DIALECT || 'postgres',
  },
  production: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PG_PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
    dialect: process.env.DIALECT || 'postgres',
  },
  DefaultRoleId: 5,
};
