import { encriptaPassword, comparaPassword } from '../helpers/pass.helper.js';
import { generaToken } from '../helpers/token.helper.js';

import { authService } from '../services/index.js';
import { catchedAsync, responseError, responseAuth } from '../utils/index.js';
import { usuarioDto } from '../dto/index.js';
import { userSchema } from '../schemas/index.js';

const postRegistro = async (req, res) => {
    const validatedResult = await userSchema.validateUser(req.body);
    
    if (validatedResult.error)
        return responseError(res, 400, JSON.parse(validatedResult.error.message));
    
    const { dni, pass } = validatedResult.data;
    const numUsuarios = await authService.getUsersByDni(dni);
    if (numUsuarios > 0)
        return responseError(res, 400, 'Ya existe un usuario registrado con ese DNI');
    else {
        const encPass = await encriptaPassword(pass);
        const usuario = {
            ...validatedResult.data,
            pass: encPass
        };
        
        const insertResult = await authService.postRegistraUser(usuario);
        usuario.id = insertResult.insertId;

        // APLICAR DTO USUARIO
        const resp = usuarioDto.single(usuario);
        const token = generaToken(resp);
        responseAuth(res, 200, token, resp);
    }
};

const postLogin = async (req, res) => {
    const validatedResult = await userSchema.validateLogin(req.body);

    if (validatedResult.error)
        return responseError(res, 400, JSON.parse(validatedResult.error.message));

    const result = await authService.postLoginUser(validatedResult.data);

    if (result.length === 0) {
        responseError(res, 400, 'No se ha encontrado un usuario con ese DNI');
    } else {
        const { pass } = validatedResult.data;
        const usuario = result[0];

        const equalPass = await comparaPassword(pass, usuario.pass);
        if (equalPass) {
            const resp = usuarioDto.single(usuario);
            const token = generaToken(usuario);
            responseAuth(res, 200, token, resp);
        } else
            responseError(res, 401, 'La contraseña es incorrecta');
    }
};

export default {
    postRegistro: catchedAsync(postRegistro),
    postLogin: catchedAsync(postLogin)
};