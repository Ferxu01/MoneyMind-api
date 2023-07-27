const express = require('express');
const conexion = require('../db');
const PassHelper = require('../helpers/pass.helper');
const TokenHelper = require('../helpers/token.helper');

const router = express.Router();

// Registrar usuario
router.post('/registro', async (req, res) => {
    const body = req.body;

    if (!req.body) {
        return res.status(400).send({
            result: 'KO',
            message: 'Falta información en la petición'
        });
    }

    conexion.query(`SELECT COUNT(*) as numUsuarios FROM usuario WHERE dni = '${body.dni}'`, async (error, results, fields) => {
        if (results[0].numUsuarios > 0) {
            res.json({
                result: 'KO',
                message: 'Ya existe un usuario registrado con el mismo DNI'
            });
        } else if (results[0].numUsuarios === 0) {
            
            let encPass = await PassHelper.encriptaPassword(body.pass);
            const usuario = {
                dni: body.dni,
                nombre: body.nombre,
                apellidos: body.apellidos,
                pass: encPass
            };
            
            conexion.query(`INSERT INTO usuario (dni, nombre, apellidos, pass) VALUES ('${usuario.dni}', '${usuario.nombre}', '${usuario.apellidos}', '${usuario.pass}')`, (error, results, fields) => {
                if (error)
                    console.log(error);

                usuario.id = results.insertId;
                let token = TokenHelper.generaToken(usuario);
                res.json({
                    result: 'OK',
                    token,
                    usuario
                });
            });
        }
    });
});

// Loguear un usuario
router.post('/login', (req, res) => {
    const { dni, pass } = req.body;

    if (dni && pass) {
        conexion.query(`SELECT * FROM usuario WHERE dni = '${dni}'`, async (error, results, fields) => {
            if (error)
                console.log(error);
            
            if (results.length > 0) {
                let objRes = results[0];

                const equalPass = await PassHelper.comparaPassword(pass, objRes.pass);
                
                if (equalPass) {
                    let idUsuario = objRes.id_usuario;
                    delete objRes.id_usuario;
                    objRes.id = idUsuario;

                    const token = TokenHelper.generaToken(objRes);
                    res.json({
                        result: 'OK',
                        token,
                        usuario: objRes
                    });
                }
                
            }
        });
    }
});

module.exports = router;