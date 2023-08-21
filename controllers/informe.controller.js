import { catchedAsync, responseError, responseMessage, response } from '../utils/index.js';
import { transaccionService, usuarioService, cuentaService } from '../services/index.js';
import { transaccionDto } from '../dto/index.js';
import { generaPdf } from '../utils/pdf.js';

const getInformeTransaccionesSemanales = async (req, res) => {
    const { id } = req.user;
    const { idCuenta } = req.params;
    const { fecha } = req.body;

    if (fecha) {
        const transacciones = await transaccionService.getTransaccionesSemanales(id, idCuenta, fecha);
        const cuenta = await cuentaService.getCuentaById(idCuenta, id);

        if (transacciones.length > 0) {
            let dtoTransacciones = transaccionDto.multiple(transacciones);

            const usuario = await usuarioService.getUserLogueado(id);
            const result = await generaPdf(usuario, dtoTransacciones, cuenta);
            response(res, 200, result);
        }
    }
};

const getInformeTransaccion = async (req, res) => {
    const usuario = await usuarioService.getUserLogueado(req.user.id);
    const result = await generaPdf(usuario);
    response(res, 200, result);
};

export default {
    getInformeTransaccionesSemanales: catchedAsync(getInformeTransaccionesSemanales),
    getInformeTransaccion: catchedAsync(getInformeTransaccion)
};