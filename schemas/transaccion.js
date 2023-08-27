import z from 'zod';

const transaccionSchema = z.object({
    importe: z.number().positive(),
    descripcion: z.string(),
    tipo: z.number().refine(value => value === 0 || value === 1)
});

function validateTransaccion(obj) {
    return transaccionSchema.safeParseAsync(obj);
}

export default {
    validateTransaccion
};