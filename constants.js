require('dotenv').config();

exports.module = {
  local: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PORT || 43401,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
  },
  staging: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
  },
  production: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
  },
  DefaultRoleId: 5,
};
