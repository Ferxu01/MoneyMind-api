const express = require('express');
const conexion = require('../db');

const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

// Definir las rutas y los controladores correspondientes
router.get('/', auth, (req, res) => {
  res.send('Listado de transacciones');

  conexion.query('SELECT * FROM transaccion', (error, results, fields) => {
    if(error)
        throw error;
    
    results.forEach(row => {
        console.log(row.importe);
    });
  });
});

// Realizar una transaccion (Ingreso/Gasto)
router.post('/:idCuenta', auth, (req, res) => {
  const body = req.body;
  const params = req.params;

  if (body.usuario && body.importe && body.tipo) {
    //console.log(body);
    conexion.query(
      `INSERT INTO transaccion (usuario_id, importe, tipo) VALUES (${body.usuario}, ${body.importe}, '${body.tipo}')`, 
      (error, results, fields) => {
        if (error)
          console.log(error);
        else {
          console.log(results);
          let sqlIngreso = `UPDATE cuenta SET saldo = saldo+${body.importe} WHERE usuario_id = ${body.usuario} AND num_cuenta = ${params.idCuenta}`;
          let sqlGasto = `UPDATE cuenta SET saldo = saldo-${body.importe} WHERE usuario_id = ${body.usuario} AND num_cuenta = ${params.idCuenta}`;
          
          conexion.query(body.tipo === 'INGRESO' ? sqlIngreso : sqlGasto, 
            (error, results, fields) => {
              if (error)
                console.log(error);
              else
                console.log(results);
          });
        }
      });

  }
});

module.exports = router;