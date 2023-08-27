import z from 'zod';

const cuentaSchema = z.object({
    nombreCuenta: z.string(),
    moneda: z.string()
});
function validateCuenta(obj) {
    return cuentaSchema.safeParseAsync(obj);
}

export default {
    validateCuenta
};