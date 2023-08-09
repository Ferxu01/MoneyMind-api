const express = require('express');
const { informeController } = require('../controllers');
const { auth } = require('../middlewares/auth.middleware');

const router = express.Router();

router.get('/:idCuenta/semanal', auth, informeController.getInformeTransaccionesSemanales);

module.exports = router;