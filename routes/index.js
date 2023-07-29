const express = require('express');
const router = express.Router();

router.use('/auth', require('./auth.routes'));
router.use('/transaccion', require('./transaccion.routes'));
router.use('/cuenta', require('./cuenta.routes'));

module.exports = router;