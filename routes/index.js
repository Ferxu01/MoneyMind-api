import { Router } from 'express';

const router = Router();

import authRoute from './auth.routes.js';
import transaccionRoute from './transaccion.routes.js';
import cuentaRoute from './cuenta.routes.js';
import informeRoute from './informe.routes.js';

router.use('/auth', authRoute);
router.use('/transaccion', transaccionRoute);
router.use('/cuenta', cuentaRoute);
router.use('/informe', informeRoute);

export default router;