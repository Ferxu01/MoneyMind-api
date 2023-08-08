const PassHelper = require('../helpers/pass.helper');
const TokenHelper = require('../helpers/token.helper');

const { authService } = require('../services');
const { catchedAsync, responseError, responseAuth } = require('../utils');
const { DataNotFoundError } = require('../utils/errors');
const { usuarioDto } = require('../dto');


const postRegistro = async (req, res) => {
    const { dni, nombre, apellidos, pass} = req.body;

    if (!req.body)
        responseError(res, 400, 'Falta información en la petición');

    const numUsuarios = await authService.getUsersByDni(dni);
    if (numUsuarios > 0)
        responseError(res, 400, 'Ya existe un usuario registrado con ese DNI');
    else {
        let encPass = await PassHelper.encriptaPassword(pass);
        const usuario = {
            dni,
            nombre,
            apellidos,
            pass: encPass
        };
        console.log(usuario);

        const insertResult = await authService.postRegistraUser(usuario);
        usuario.id = insertResult.insertId;

        // APLICAR DTO USUARIO
        const resp = usuarioDto.single(usuario);
        console.log(resp);

        //usuario.id = insertResult.insertId;
        let token = TokenHelper.generaToken(resp);
        responseAuth(res, 200, token, resp);
    }
};

const postLogin = async (req, res) => {
    const { dni, pass } = req.body;

    if (dni && pass) {
        const result = await authService.postLoginUser({dni, pass});
        if (result.length === 0) {
            responseError(res, 400, 'No se ha encontrado un usuario con ese DNI');
        } else {
            let usuario = result[0];
            const equalPass = await PassHelper.comparaPassword(pass, usuario.pass);
            if (equalPass) {
                const token = TokenHelper.generaToken(usuario);
                responseAuth(res, 200, token, usuario);
            } else
                responseError(res, 401, "La contraseña es incorrecta");
        }
    }
};

module.exports = {
    postRegistro: catchedAsync(postRegistro),
    postLogin: catchedAsync(postLogin)
};