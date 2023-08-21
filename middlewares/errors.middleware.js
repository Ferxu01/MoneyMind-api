import { responseError } from '../utils/index.js';

export const errorHandler = (error, req, res, next) => {
    const { statusCode, message } = error;
    responseError(res, statusCode, message);
};