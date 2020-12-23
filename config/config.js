require('dotenv').config();

module.exports = {
    development:{
        url:'postgres://postgres:root@127.0.0.1:5432/js_cms',
        dialect:'postgres'
    },
    production: {
        url: process.env.DATABASE_URL,
        dialect: 'postgres',
    },
}
