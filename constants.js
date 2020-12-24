
const PG_HOST = process.env.PG_HOST || '127.0.0.1';
const PG_PORT = process.env.PG_PORT || 5432;
const DB_USERNAME = process.env.DB_USERNAME || admin;
const DB_PASSWORD = process.env.DB_PASSWORD || admin;
const DATABASE = process.env.DATABASE || js_cms;

module.exports={
    PG_HOST,
    PG_PORT,
    DB_USERNAME,
    DB_PASSWORD,
    DATABASE
  }
