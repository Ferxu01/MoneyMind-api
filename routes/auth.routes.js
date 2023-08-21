import { Router } from 'express';
import { authController } from '../controllers/index.js';

const router = Router();

// Registrar usuario
router.post('/registro', authController.postRegistro);

// Loguear un usuario
router.post('/login', authController.postLogin);

export default router;