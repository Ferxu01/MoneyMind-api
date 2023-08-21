import jwt from 'jwt-simple';
import moment from 'moment';

import { TOKEN } from '../config.js';
const { SECRET, TOKEN_EXP_TIME } = TOKEN;

function generaToken(usuario) {
    const payload = {
        sub: usuario.id_usuario,
        iat: moment().unix(),
        exp: moment().add(TOKEN_EXP_TIME, 'minutes').unix()
    };

    return jwt.encode(payload, SECRET);
}

function decodificaToken(token) {
    return new Promise((resolve, reject) => {
        try {
            const payload = jwt.decode(token, SECRET, true);

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'El token ha expirado'
                });
            }
            resolve(payload.sub);
        } catch (error) {
            reject({
                status: 401,
                message: 'El token no es válido'
            });
        }
    });
}

export {
    generaToken,
    decodificaToken
};