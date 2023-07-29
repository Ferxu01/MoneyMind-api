const responseError = (res, status, message) => {
    res.status(status).json({
        result: 'KO',
        message
    });
};

module.exports = responseError;