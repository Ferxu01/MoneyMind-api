import { hash as _hash, compare } from 'bcrypt';

function encriptaPassword(password) {
    return _hash(password, 10);
}

function comparaPassword(password, hash) {
    return compare(password, hash);
}

export {
    encriptaPassword,
    comparaPassword
};