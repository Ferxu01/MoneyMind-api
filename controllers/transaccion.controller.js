import { catchedAsync, responseError, responseMessage } from '../utils/index.js';
import { cuentaService, transaccionService } from '../services/index.js';
import { transaccionSchema } from '../schemas/index.js';

const postTransaccion = async (req, res) => {
    const validatedResult = await transaccionSchema.validateTransaccion(req.body);

    if (validatedResult.error)
        return responseError(res, 400, JSON.parse(validatedResult.error.message));
        
    const { id } = req.user;
    const { idCuenta } = req.params;

    // COMPROBAR SI EXISTE LA CUENTA CON EL ID
    const cuenta = await cuentaService.getCuentaById(idCuenta, id);
    if (!cuenta)
        return responseError(res, 400, 'No existe una cuenta con ese id o la cuenta no te pertenece');

    const result = await transaccionService.postNuevaTransaccion(id, idCuenta, validatedResult.data);

    if (result.insertId > 0) {
        const { importe, tipo } = validatedResult.data;
        const resultUpd = await transaccionService.updateSaldoCuenta(id, {idCuenta, importe, tipo});
        if (resultUpd.changedRows > 0) {
            responseMessage(res, 200, 'La transacción se realizó correctamente');
        }
    } else {
        responseError(res, 400, 'No se ha encontrado la cuenta a la que hacer la transacción');
    }
};

export default {
    postTransaccion: catchedAsync(postTransaccion)
};