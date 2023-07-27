const DB_OPTIONS = {
    host: 'localhost',
    database: 'moneymind',
    user: 'root',
    password: '',
};

const TOKEN_OPTIONS = {
    SECRET: 'moneymind',
    TOKEN_EXP_TIME: 7*24*60
};

module.exports = {
    PORT: process.env.PORT || 3000,
    DB: DB_OPTIONS,
    TOKEN: TOKEN_OPTIONS
};