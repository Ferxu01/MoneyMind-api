const getTotalDiferencia = (transacciones) => {
    let total = 0;

    for (let i = 0; i < transacciones.length; i++) {
        if (transacciones[i].tipo === 'INGRESO')
            total += transacciones[i].importe;
        else
            total -= transacciones[i].importe;
    }

    return total;
};

export {
    getTotalDiferencia
};