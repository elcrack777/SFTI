const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'Clientes'
});


mysqlConnection.connect(err => {
    if (err) {
        console.log('Error en db:', err);
        return;
    } else {
        console.log('Db funcionando');
    }
});

module.exports = mysqlConnection;