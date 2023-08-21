import { Router } from 'express';
import { auth } from '../middlewares/auth.middleware.js';
import { transaccionController } from '../controllers/index.js';

const router = Router();

// Realizar una transaccion (Ingreso/Gasto)
router.post('/:idCuenta', auth, transaccionController.postTransaccion);

export default router;