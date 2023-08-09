const { formateaFecha } = require('../helpers/fecha.helper');


const singleObj = (recurso) => ({
    importe: Number(recurso.importe),
    descripcion: recurso.descripcion,
    fecha: formateaFecha(recurso.fecha, 'YYYY-MM-DD'),
    tipo: recurso.tipo
    //tipo: recurso.tipo === 1 ? 'INGRESO' : 'GASTO'
});

const multipleDto = (recursos) => recursos.map(res => singleObj(res));

module.exports = {
    single: singleObj,
    multipleDto
};