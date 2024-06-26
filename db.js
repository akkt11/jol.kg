const { propfind } = require('./routes/jwtAuth')

const Pool = require('pg').Pool
require('dotenv').config()

const devConfig = {
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    database: process.env.PG_DATABASE
}

const prodfConfig = {
    connectionString: process.env.DATABASE_URL // heroku addons
}

const pool = new Pool(process.env.NODE_ENV === 'production' ? prodfConfig : devConfig)

module.exports = pool