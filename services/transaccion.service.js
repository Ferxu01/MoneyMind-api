import conexion from '../db.js';

const getTransaccionesSemanales = (idUsuario, idCuenta, fecha) => {
    return new Promise((resolve, reject) => {
        conexion.query(`
            SELECT * FROM transaccion WHERE usuario_id = ${idUsuario} AND cuenta_id = ${idCuenta} AND YEARWEEK(fecha, 1) = YEARWEEK('${fecha}', 1)`
        , (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const postNuevaTransaccion = (idUsuario, idCuenta, {importe, tipo, descripcion}) => {
    return new Promise((resolve, reject) => {
        conexion.query(
        `INSERT INTO transaccion (usuario_id, cuenta_id, importe, tipo, descripcion) VALUES (${idUsuario}, ${idCuenta}, ${importe}, '${tipo}', '${descripcion}')`, (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

const updateSaldoCuenta = (idUsuario, {idCuenta, importe, tipo}) => {
    return new Promise((resolve, reject) => {
        let sqlIngreso = `UPDATE cuenta SET saldo = saldo+${importe} WHERE usuario_id = ${idUsuario} AND num_cuenta = ${idCuenta}`;
        let sqlGasto = `UPDATE cuenta SET saldo = saldo-${importe} WHERE usuario_id = ${idUsuario} AND num_cuenta = ${idCuenta}`;

        conexion.query(tipo === 'INGRESO' ? sqlIngreso : sqlGasto, 
        (error, results, fields) => {
            if (error) reject(error);
            resolve(results);
        });
    });
};

export default {
    getTransaccionesSemanales,
    postNuevaTransaccion,
    updateSaldoCuenta
};