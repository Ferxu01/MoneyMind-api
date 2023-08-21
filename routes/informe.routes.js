import { Router } from 'express';
import { informeController } from '../controllers/index.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = Router();

router.get('/:idCuenta/semanal', auth, informeController.getInformeTransaccionesSemanales);

export default router;