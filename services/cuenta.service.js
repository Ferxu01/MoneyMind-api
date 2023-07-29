const conexion = require('../db');

const postNuevaCuenta = ({nombreCuenta, estado, moneda, usuario}) => {
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO cuenta (nombre_cuenta, estado, moneda, usuario_id) 
            VALUES ('${nombreCuenta}','${estado}','${moneda}',${usuario})`, 
            (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const deleteCuenta = (idCuenta) => {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM cuenta WHERE num_cuenta = ${idCuenta} AND usuario_id = 1`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        }); //Id usuario = 1 en pruebas
    });
};

module.exports = {
    postNuevaCuenta,
    deleteCuenta
};