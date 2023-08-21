import { Router } from 'express';
import { cuentaController } from '../controllers/index.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = Router();

//Dar de alta una nueva cuenta a un usuario
router.post('/', auth, cuentaController.postCuenta);

//Eliminar una cuenta del usuario activo
router.delete('/:idCuenta', auth, cuentaController.deleteCuenta);

export default router;