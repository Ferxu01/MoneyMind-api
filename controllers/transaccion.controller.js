import { catchedAsync, responseError, responseMessage, response } from '../utils/index.js';
import { transaccionService } from '../services/index.js';

const postTransaccion = async (req, res) => {
    const { id } = req.user;
    const { importe, tipo, descripcion } = req.body;
    const { idCuenta } = req.params;

    if (importe && tipo && descripcion) {
        const result = await transaccionService.postNuevaTransaccion(id, idCuenta, {importe, tipo, descripcion});

        if (result.insertId > 0) {
            const resultUpd = await transaccionService.updateSaldoCuenta(id, {idCuenta, importe, tipo});
            if (resultUpd.changedRows > 0) {
                responseMessage(res, 200, 'La transacción se realizó correctamente');
            }
        } else {
            responseError(res, 400, 'No se ha encontrado la cuenta a la que hacer la transacción');
        }
    }
};

export default {
    postTransaccion: catchedAsync(postTransaccion)
};