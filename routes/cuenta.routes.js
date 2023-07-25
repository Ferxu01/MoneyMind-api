const express = require('express');
const conexion = require('../db');

const router = express.Router();

//Dar de alta una nueva cuenta a un usuario
router.post('/', (req, res) => {
    const body = req.body;
    conexion.query(
        `INSERT INTO cuenta (nombre_cuenta, estado, moneda, usuario_id) 
        VALUES ('${body.nombreCuenta}','${body.estado}','${body.moneda}',${body.usuario})`, (error, results, fields) => {
        if(error)
            console.log(error);
        else
            console.log(results);
    });
});

//Eliminar una cuenta del usuario activo
router.delete('/:idCuenta', (req, res) => {
    let idCuenta = parseInt(req.params.idCuenta);
    conexion.query(`DELETE FROM cuenta WHERE num_cuenta = ${idCuenta} AND usuario_id = 1`); //Id usuario = 1 en pruebas
});

module.exports = router;