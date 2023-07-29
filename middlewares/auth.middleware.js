const TokenHelper = require('../helpers/token.helper');
const { responseError } = require('../utils');

function auth(req, res, next) {
    if (!req.headers.authorization) {
        responseError(res, 401, 'Cabecera de autenticación tipo Bearer no encontrada [Authorization: Bearer jwtToken]');
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        responseError(res, 401, 'Token de acceso JWT no encontrado en la cabecera [Authorization: Bearer jwtToken]');
    }

    TokenHelper.decodificaToken(token)
        .then(userId => {
            req.user = {
                id: userId,
                token
            };

            return next();
        })
        .catch(resp => {
            res.status(resp.status);
            res.json({
                result: 'KO',
                message: resp.message
            });
        });
}

module.exports = {
    auth
};