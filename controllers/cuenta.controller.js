import { catchedAsync, responseError, responseMessage } from '../utils/index.js';
import { cuentaService } from '../services/index.js';
import { cuentaSchema } from '../schemas/index.js';

const postCuenta = async (req, res) => {
    const validateResult = await cuentaSchema.validateCuenta(req.body);

    if (validateResult.error)
        return responseError(res, 400, JSON.parse(validateResult.error.message));

    const { id } = req.user;
    const result = await cuentaService.postNuevaCuenta(id, validateResult.data);

    if (result)
        responseMessage(res, 200, 'Cuenta creada correctamente');
};

const deleteCuenta = async (req, res) => {
    const { id } = req.user;
    const idCuenta = parseInt(req.params.idCuenta);
    
    const result = await cuentaService.deleteCuenta(idCuenta, id);

    if (result.affectedRows > 0) {
        responseMessage(res, 200, `La cuenta con id ${idCuenta} se ha borrado correctamente`);
    } else {
        responseError(res, 400, `La cuenta con id ${idCuenta} no existe`);
    }
};

export default {
    postCuenta: catchedAsync(postCuenta),
    deleteCuenta: catchedAsync(deleteCuenta)
};