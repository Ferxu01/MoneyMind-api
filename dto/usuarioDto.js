const singleObj = (recurso) => ({
    id: recurso.id,
    dni: recurso.dni,
    nombre: recurso.nombre,
    apellidos: recurso.apellidos
});

const multipleDto = (recursos) => recursos.map(res => singleObj(res));

module.exports = {
    single: singleObj,
    multipleDto
};