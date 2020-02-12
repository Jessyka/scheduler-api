const connection = require('mysql')

connection.createConnection({
    host: 'localhost',
    port: 3307,
    user: 'user',
    password: '',
    database: 'agenda'
})