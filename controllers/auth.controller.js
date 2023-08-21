import { encriptaPassword, comparaPassword } from '../helpers/pass.helper.js';
import { generaToken } from '../helpers/token.helper.js';

import { authService } from '../services/index.js';
import { catchedAsync, responseError, responseAuth } from '../utils/index.js';
import { usuarioDto } from '../dto/index.js';

const postRegistro = async (req, res) => {
    const { dni, nombre, apellidos, pass} = req.body;

    if (!req.body)
        responseError(res, 400, 'Falta información en la petición');

    const numUsuarios = await authService.getUsersByDni(dni);
    if (numUsuarios > 0)
        responseError(res, 400, 'Ya existe un usuario registrado con ese DNI');
    else {
        let encPass = await encriptaPassword(pass);
        const usuario = {
            dni,
            nombre,
            apellidos,
            pass: encPass
        };

        const insertResult = await authService.postRegistraUser(usuario);
        usuario.id = insertResult.insertId;

        // APLICAR DTO USUARIO
        const resp = usuarioDto.single(usuario);
        console.log(resp);

        //usuario.id = insertResult.insertId;
        let token = generaToken(resp);
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
            const equalPass = await comparaPassword(pass, usuario.pass);
            if (equalPass) {
                const token = generaToken(usuario);
                responseAuth(res, 200, token, usuario);
            } else
                responseError(res, 401, "La contraseña es incorrecta");
        }
    }
};

export default {
    postRegistro: catchedAsync(postRegistro),
    postLogin: catchedAsync(postLogin)
};