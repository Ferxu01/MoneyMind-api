export const PORT = 3000;

const DB_OPTIONS = {
    host: 'localhost',
    database: 'moneyminder',
    user: undefined,
    password: undefined,
};

module.exports = {
    PORT: process.env.PORT || 3000,
    DB: DB_OPTIONS
};