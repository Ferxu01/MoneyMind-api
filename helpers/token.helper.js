const jwt = require('jwt-simple');
const moment = require('moment');

const { SECRET, EXP_TIME } = require('../config').TOKEN;

function generaToken(usuario) {
    const payload = {
        sub: usuario.id,
        iat: moment().unix(),
        exp: moment().add(EXP_TIME, 'minutes').unix()
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

module.exports = {
    generaToken,
    decodificaToken
};