const TokenHelper = require('../helpers/token.helper');

function auth(req, res, next) {
    if (!req.headers.authorization) {
        return res.status(401).send({
            result: 'KO',
            message: 'Cabecera de autenticación tipo Bearer no encontrada [Authorization: Bearer jwtToken]'
        });
    }

    const token = req.headers.authorization.split(' ')[1];
    if (!token) {
        return res.status(401).send({
            result: 'KO',
            message: 'Token de acceso JWT no encontrado en la cabecera [Authorization: Bearer jwtToken]'
        });
    }

    TokenHelper.decodificaToken(token)
        .then(userId => {
            req.user = {
                id: userId,
                token
            };

            return next();
        })
        .catch(res => {
            res.status(res.status);
            res.json({
                result: 'KO',
                message: res.message
            });
        });
}

module.exports = {
    auth
};