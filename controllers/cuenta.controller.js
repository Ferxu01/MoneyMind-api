const { catchedAsync, responseError, responseMessage } = require('../utils');
const { cuentaService } = require('../services')

const postCuenta = async (req, res) => {
    const {nombreCuenta, estado, moneda, usuario} = req.body;
    const result = await cuentaService.postNuevaCuenta({nombreCuenta,estado,moneda,usuario});
    if (result) {
        console.log(result);
        responseMessage(res, 200, 'Cuenta creada correctamente');
    }
    
};

const deleteCuenta = async (req, res) => {
    let idCuenta = parseInt(req.params.idCuenta);
    const result = await cuentaService.deleteCuenta(idCuenta);

    if (result.affectedRows > 0) {
        responseMessage(res, 200, `La cuenta con id ${idCuenta} se ha borrado correctamente`);
    } else {
        responseError(res, 400, `La cuenta con id ${idCuenta} no existe`);
    }
};

module.exports = {
    postCuenta: catchedAsync(postCuenta),
    deleteCuenta: catchedAsync(deleteCuenta)
};