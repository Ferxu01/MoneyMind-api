const express = require('express');
const conexion = require('../db');
const { auth } = require('../middlewares/auth.middleware');
const { transaccionController } = require('../controllers');

const router = express.Router();

router.get('/informeGastos', transaccionController.getInformeTransaccion);

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
router.post('/:idCuenta', auth, transaccionController.postTransaccion);

module.exports = router;