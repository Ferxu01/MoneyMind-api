const authResponse = (res, statusCode, token, data) => {
    res.status(statusCode).json({
        result: 'OK',
        token,
        data
    });
};

module.exports = authResponse;