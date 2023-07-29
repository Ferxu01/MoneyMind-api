const conexion = require('../db');

const postNuevaTransaccion = ({usuario, importe, tipo}) => {
    return new Promise((resolve, reject) => {
        conexion.query(
        `INSERT INTO transaccion (usuario_id, importe, tipo) VALUES (${usuario}, ${importe}, '${tipo}')`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const updateSaldoCuenta = ({idCuenta, importe, usuario, tipo}) => {
    return new Promise((resolve, reject) => {
        let sqlIngreso = `UPDATE cuenta SET saldo = saldo+${importe} WHERE usuario_id = ${usuario} AND num_cuenta = ${idCuenta}`;
        let sqlGasto = `UPDATE cuenta SET saldo = saldo-${importe} WHERE usuario_id = ${usuario} AND num_cuenta = ${idCuenta}`;

        conexion.query(tipo === 'INGRESO' ? sqlIngreso : sqlGasto, 
        (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    postNuevaTransaccion,
    updateSaldoCuenta
};