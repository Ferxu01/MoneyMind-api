function serializaParametro(valor) {
    return typeof valor === 'string' ? `'${valor}'` : valor;
}

function generaSentenciaInsert(tabla, params) {
    const campos = Object.keys(params).join(', ');
    const valores = Object.values(params)
                            .map(valor => serializaParametro(valor))
                            .join(', ');


    //const valores = Object.values(params).join(', ');

    const sql = `INSERT INTO ${tabla} (${campos}) VALUES (${valores})`;

    return sql;
}

module.exports = {
    generaSentenciaInsert
};