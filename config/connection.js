var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Midwestpest1!",
    database: "burgers_db"
});

connection.connect(err => {
    if (err) throw err;
    console.log('Database connected')
})

module.exports = connection;