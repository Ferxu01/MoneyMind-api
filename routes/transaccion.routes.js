const express = require('express');
const conexion = require('../db');

const router = express.Router();

// Definir las rutas y los controladores correspondientes
router.get('/', (req, res) => {
  res.send('Listado de transacciones');

  conexion.query('SELECT * FROM transaccion', (error, results, fields) => {
    if(error)
        throw error;
    
    results.forEach(row => {
        console.log(row.importe);
    });
  });
});

module.exports = router;