const mysql = require("mysql2")

const pool= mysql.createPool({
host: 'localhost',
user:'root',
password:'1234',
puerto: 3306,
database:'admi-finanzas'
})

module.exports = pool



