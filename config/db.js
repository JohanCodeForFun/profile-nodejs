require('dotenv').config()

const Pool = require('pg').Pool
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'dvdrental',
  password: `${process.env.DB_PASSWORD}`,
  port: 5435,
});

module.exports = {
  pool
}