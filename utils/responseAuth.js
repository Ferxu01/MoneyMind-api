export const responseAuth = (res, statusCode, token, data) => {
    res.status(statusCode).json({
        result: 'OK',
        token,
        data
    });
};