import { decodificaToken } from '../helpers/token.helper.js';
import { responseError } from '../utils/index.js';

function auth(req, res, next) {
    if (!req.headers.authorization) {
        responseError(res, 401, 'Cabecera de autenticación tipo Bearer no encontrada [Authorization: Bearer jwtToken]');
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        responseError(res, 401, 'Token de acceso JWT no encontrado en la cabecera [Authorization: Bearer jwtToken]');
    }

    decodificaToken(token)
        .then(userId => {
            req.user = {
                id: userId,
                token
            };

            return next();
        })
        .catch(resp => {
            responseError(res, resp.status, resp.message);
        });
}

export {
    auth
};