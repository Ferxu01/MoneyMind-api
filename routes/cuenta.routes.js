const express = require('express');
const { cuentaController } = require('../controllers');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

//Dar de alta una nueva cuenta a un usuario
router.post('/', auth, cuentaController.postCuenta);

//Eliminar una cuenta del usuario activo
router.delete('/:idCuenta', auth, cuentaController.deleteCuenta);

module.exports = router;