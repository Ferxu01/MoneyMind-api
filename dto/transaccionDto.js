import { formateaFecha } from '../helpers/fecha.helper.js';


const single = (recurso) => ({
    importe: Number(recurso.importe),
    descripcion: recurso.descripcion,
    fecha: formateaFecha(recurso.fecha, 'YYYY-MM-DD'),
    tipo: recurso.tipo
    //tipo: recurso.tipo === 1 ? 'INGRESO' : 'GASTO'
});

const multiple = (recursos) => recursos.map(res => single(res));

export default {
    single,
    multiple
};