export const response = (res, statusCode, data) => {
    res.status(statusCode).json({
        result: 'OK',
        data
    });
};