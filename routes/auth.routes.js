const express = require('express');
const { authController } = require('../controllers');

const router = express.Router();

// Registrar usuario
router.post('/registro', authController.postRegistro);

// Loguear un usuario
router.post('/login', authController.postLogin);

module.exports = router;