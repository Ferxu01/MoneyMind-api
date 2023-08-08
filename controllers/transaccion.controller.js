const { catchedAsync, responseError, responseMessage, response } = require('../utils');
const { transaccionService, usuarioService } = require('../services');
const generaPdf = require('../utils/pdf');

const getTransaccionesSemanales = async (req, res) => {
    const { id } = req.user;
    const { idCuenta } = req.params;
    const { fechaInicioSemana } = req.body;

    if (fechaInicioSemana) {
        const result = await transaccionService.getTransaccionesSemanales(id, idCuenta, fechaInicioSemana);
        console.log(result);
    }
};
const postTransaccion = async (req, res) => {
    const { id } = req.user;
    const { importe, tipo, descripcion } = req.body;
    const { idCuenta } = req.params;

    if (importe && tipo && descripcion) {
        const result = await transaccionService.postNuevaTransaccion(id, {importe, tipo, descripcion});

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

const getInformeTransaccion = async (req, res) => {
    const usuario = await usuarioService.getUserLogueado(req.user.id);
    const result = await generaPdf(usuario);
    response(res, 200, result);
};

module.exports = {
    getTransaccionesSemanales: catchedAsync(getTransaccionesSemanales),
    postTransaccion: catchedAsync(postTransaccion),
    getInformeTransaccion: catchedAsync(getInformeTransaccion)
};