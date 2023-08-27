import z from 'zod';

const userSchema = z.object({
    dni: z.string().max(9),
    nombre: z.string(),
    apellidos: z.string(),
    pass: z.string()
});

const loginSchema = z.object({
    dni: z.string(),
    pass: z.string()
})

function validateUser(obj) {
    return userSchema.safeParseAsync(obj);
}

function validateLogin(obj) {
    return loginSchema.safeParseAsync(obj);
}

export default {
    validateUser,
    validateLogin
};