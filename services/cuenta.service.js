const conexion = require('../db');

const getCuentaById = (idCuenta, idUsuario) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM cuenta WHERE usuario_id = ${idUsuario} AND num_cuenta = ${idCuenta}`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

const postNuevaCuenta = (idUsuario, {nombreCuenta, estado, moneda}) => {
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO cuenta (nombre_cuenta, estado, moneda, usuario_id) 
            VALUES ('${nombreCuenta}','${estado}','${moneda}',${idUsuario})`, 
            (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const deleteCuenta = (idCuenta, idUsuario) => {
    return new Promise((resolve, reject) => {
        conexion.query(`DELETE FROM cuenta WHERE num_cuenta = ${idCuenta} AND usuario_id = ${idUsuario}`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    getCuentaById,
    postNuevaCuenta,
    deleteCuenta
};