const { responseError } = require('../utils');

const errorHandler = (error, req, res, next) => {
    const { statusCode, message } = error;
    responseError(res, statusCode, message);
};

module.exports = {
    errorHandler
};