const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/transaccion', require('./transaccion.routes'));
router.use('/cuenta', require('./cuenta.routes'));
router.use('/informe', require('./informe.routes'));

module.exports = router;