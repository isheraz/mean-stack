require('dotenv').config();

export const configuration = {
  local: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PG_PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
  },
  staging: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PG_PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
  },
  production: {
    host: process.env.PG_HOST || 'jscms.test',
    port: process.env.PG_PORT || 45775,
    user: process.env.DB_USERNAME || 'admin',
    password: process.env.DB_PASSWORD || 'admin',
    database: process.env.DATABASE || 'jscms',
  },
};
export const DefaultRoleId = 5;
