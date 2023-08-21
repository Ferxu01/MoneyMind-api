export const responseMessage = (res, status, message) => {
    res.status(status).json({
        result: 'OK',
        message
    });
};