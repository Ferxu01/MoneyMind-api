const conexion = require('../db');
const { helpersSql } = require('../utils');

const getUsersByDni = (dni) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT COUNT(*) as numUsuarios FROM usuario WHERE dni = '${dni}'`, async (error, results, fields) => {
            if (error) reject(error);
            resolve(results[0].numUsuarios);
        });
    });
};

const postRegistraUser = ({dni, nombre, apellidos, pass}) => {
    let sqlGenerada = helpersSql.generaSentenciaInsert('usuario', {
        dni, nombre, apellidos, pass
    });

    return new Promise((resolve, reject) => {
        conexion.query(sqlGenerada, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const postLoginUser = ({dni, pass}) => {
    return new Promise((resolve, reject) => {
        conexion.query(`SELECT * FROM usuario WHERE dni = '${dni}'`, (error, results, fields) => {
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