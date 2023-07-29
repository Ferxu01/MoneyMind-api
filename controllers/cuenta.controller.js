const { catchedAsync, response, responseError } = require('../utils');
const { cuentaService } = require('../services')

const postCuenta = async (req, res) => {
    const {nombreCuenta, estado, moneda, usuario} = req.body;
    const result = await cuentaService.postNuevaCuenta({nombreCuenta,estado,moneda,usuario});
    if (result) {
        console.log(result);
        response(res, 200, { message: 'Cuenta creada correctamente'});
    }
    
};

const deleteCuenta = async (req, res) => {
    let idCuenta = parseInt(req.params.idCuenta);
    const result = await cuentaService.deleteCuenta(idCuenta);

    if (result.affectedRows > 0) {
        response(res, 200, { message: `La cuenta con id ${idCuenta} se ha borrado correctamente`});
    } else {
        responseError(res, 400, { message: `La cuenta con id ${idCuenta} no existe`});
    }
};

module.exports = {
    postCuenta: catchedAsync(postCuenta),
    deleteCuenta: catchedAsync(deleteCuenta)
};