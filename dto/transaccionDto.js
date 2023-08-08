const singleObj = (recurso) => ({
    importe: recurso.importe,
    descripcion: recurso.descripcion,
    fecha_realizada: Date(recurso.fecha),
    tipo: recurso.tipo === 1 ? 'INGRESO' : 'GASTO'
});

const multipleDto = (recursos) => recursos.map(res => singleObj(res));

module.exports = {
    single: singleObj,
    multipleDto
};