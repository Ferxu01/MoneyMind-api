import conexion from '../db.js';

const getCuentaById = (idCuenta, idUsuario) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM cuenta WHERE usuario_id = ${idUsuario} AND num_cuenta = ${idCuenta}`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results[0]);
        });
    });
};

const postNuevaCuenta = (idUsuario, {nombreCuenta, moneda}) => {
    return new Promise((resolve, reject) => {
        conexion.query(
            `INSERT INTO cuenta (nombre_cuenta, moneda, usuario_id) 
            VALUES ('${nombreCuenta}','${moneda}',${idUsuario})`, 
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

export default {
    getCuentaById,
    postNuevaCuenta,
    deleteCuenta
};