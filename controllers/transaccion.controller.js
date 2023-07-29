const { catchedAsync, response, responseError } = require('../utils');
const { transaccionService } = require('../services');

const postTransaccion = async (req, res) => {
    const { usuario, importe, tipo } = req.body;
    const { idCuenta } = req.params;

    if (usuario && importe && tipo) {
        const result = await transaccionService.postNuevaTransaccion({usuario, importe, tipo});
        console.log(result);

        if (result.insertId > 0) {
            const result2 = await transaccionService.updateSaldoCuenta({idCuenta, importe, usuario, tipo});
            console.log(result2);
            if (result2.changedRows > 0) {
                response(res, 200, { message: 'La transacción se realizó correctamente' });
            }
        } else {
            responseError(res, 400, 'No se ha encontrado la cuenta a la que hacer la transacción');
        }
    }
};

module.exports = {
    postTransaccion: catchedAsync(postTransaccion)
};