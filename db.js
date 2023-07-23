const { DB } = require('./config');

const mysql = require('mysql');
const conexion = mysql.createConnection({
    host: DB.host,
    database: DB.database,
    user: DB.user,
    password: DB.password
});

conexion.connect(err => {
    if (err) {
        console.error('Error de conexión: ' + err.stack);
        return;
    }

    console.log('Conectado con el id ' + conexion.threadId);
});

module.exports = conexion;