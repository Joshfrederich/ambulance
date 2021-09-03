const Pool = require("pg").Pool;

module.exports.pool = new Pool({
    host: 'localhost',
    user: "postgres",
    password: "12345678",
    database: "ambulance",
    port: 5432
})