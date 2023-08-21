import conexion from '../db.js';

const getUserLogueado = (id) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM usuario WHERE id_usuario = ${id}`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results[0]);
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
    getUserLogueado,
    deleteCuenta
};