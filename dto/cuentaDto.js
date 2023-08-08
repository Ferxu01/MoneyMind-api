const singleObj = (recurso) => ({
    
});

const multipleDto = (recursos) => recursos.map(res => singleObj(res));

module.exports = {
    single: singleObj,
    multipleDto
};