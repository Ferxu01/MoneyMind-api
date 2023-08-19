const { catchedAsync, responseError, responseMessage, response } = require('../utils');
const { transaccionService, usuarioService, cuentaService } = require('../services');
const { multipleDto, single } = require('../dto/transaccionDto');
const generaPdf = require('../utils/pdf');

const getInformeTransaccionesSemanales = async (req, res) => {
    const { id } = req.user;
    const { idCuenta } = req.params;
    const { fecha } = req.body;

    if (fecha) {
        const transacciones = await transaccionService.getTransaccionesSemanales(id, idCuenta, fecha);
        const cuenta = await cuentaService.getCuentaById(idCuenta, id);

        if (transacciones.length > 0) {
            let dtoTransacciones = multipleDto(transacciones);

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

module.exports = {
    getInformeTransaccionesSemanales: catchedAsync(getInformeTransaccionesSemanales),
    getInformeTransaccion: catchedAsync(getInformeTransaccion)
};