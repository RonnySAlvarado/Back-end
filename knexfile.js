require('dotenv').config();
// const pg = require('pg');
// pg.defaults.ssl = true;

module.exports = {
  development: {
    client: 'pg',
    // connection: {
    //   username: 'postgres',
    //   password: process.env.DB_PASSWORD,
    //   database: 'gigapet',
    //   host: '/var/run/postgresql',
    //   port: 9090
    // },
    connection: `postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@localhost:9090/postgres`,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
    useNullAsDefault: true,
    // client: 'sqlite3',
    // connection: {
    //   filename: './data/gigapet.db3',
    // },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: {
      directory: './data/seeds/'
    }
  },
};