const single = (recurso) => ({
    id: recurso.id,
    dni: recurso.dni,
    nombre: recurso.nombre,
    apellidos: recurso.apellidos
});

const multiple = (recursos) => recursos.map(res => single(res));

export default {
    single,
    multiple
};