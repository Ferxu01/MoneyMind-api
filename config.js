export const DB = {
    host: 'localhost',
    database: 'moneymind',
    user: 'root',
    password: '',
};

export const TOKEN = {
    SECRET: 'moneymind',
    TOKEN_EXP_TIME: 7*24*60
};

export const PORT = process.env.PORT || 3000;