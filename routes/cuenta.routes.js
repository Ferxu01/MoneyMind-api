const express = require('express');
const { cuentaController } = require('../controllers');

const router = express.Router();

//Dar de alta una nueva cuenta a un usuario
router.post('/', cuentaController.postCuenta);

//Eliminar una cuenta del usuario activo
router.delete('/:idCuenta', cuentaController.deleteCuenta);

module.exports = router;