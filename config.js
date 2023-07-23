const DB_OPTIONS = {
    host: 'localhost',
    database: 'moneymind',
    user: 'root',
    password: '',
};

module.exports = {
    PORT: process.env.PORT || 3000,
    DB: DB_OPTIONS
};