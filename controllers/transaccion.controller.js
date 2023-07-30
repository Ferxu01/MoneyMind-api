const { catchedAsync, responseError, responseMessage, response } = require('../utils');
const { transaccionService } = require('../services');
const generaPdf = require('../utils/pdf');

const postTransaccion = async (req, res) => {
    const { usuario, importe, tipo } = req.body;
    const { idCuenta } = req.params;

    if (usuario && importe && tipo) {
        const result = await transaccionService.postNuevaTransaccion({usuario, importe, tipo});

        if (result.insertId > 0) {
            const resultUpd = await transaccionService.updateSaldoCuenta({idCuenta, importe, usuario, tipo});
            if (resultUpd.changedRows > 0) {
                responseMessage(res, 200, 'La transacción se realizó correctamente');
            }
        } else {
            responseError(res, 400, 'No se ha encontrado la cuenta a la que hacer la transacción');
        }
    }
};

const getInformeTransaccion = async (req, res) => {
    const result = await generaPdf();
    response(res, 200, result);
};

module.exports = {
    postTransaccion: catchedAsync(postTransaccion),
    getInformeTransaccion: catchedAsync(getInformeTransaccion)
};