const conexion = require('../db');

const getUsersByDni = (dni) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT COUNT(*) as numUsuarios FROM usuario WHERE dni = '${dni}'`, async (error, results, fields) => {
            if (error) reject(error);
            resolve(results[0].numUsuarios);
        });
        conexion.end();
    });
};

const postRegistraUser = ({dni, nombre, apellidos, pass}) => {
    return new Promise((resolve, reject) => {
        conexion.query(`INSERT INTO usuario (dni, nombre, apellidos, pass) VALUES ('${dni}', '${nombre}', '${apellidos}', '${pass}')`, (error, results, fields) => {
            if (error) reject(error);
            console.log(results);
            resolve(results);
        });
    });
};

const postLoginUser = ({dni, pass}) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT id_usuario as id, dni, nombre, apellidos, pass FROM usuario WHERE dni = '${dni}'`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

module.exports = {
    getUsersByDni,
    postRegistraUser,
    postLoginUser
};