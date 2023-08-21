const single = (recurso) => ({
    
});

const multiple = (recursos) => recursos.map(res => single(res));

export default {
    single,
    multiple
};