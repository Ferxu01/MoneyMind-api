const moment = require('moment');

const formateaFecha = (fecha, formato) => {
    return moment(fecha).format(formato);
};

const getInicioFinalSemana = (fechaRef) => {
    let fecha = moment(fechaRef),
        fechaInicial = fecha.clone().startOf('isoWeek'),
        fechaFinal = fecha.clone().endOf('isoWeek');

    return {
        fechaInicial: fechaInicial.format('DD-MM-YYYY'),
        fechaFinal: fechaFinal.format('DD-MM-YYYY')
    };
};

module.exports = {
    formateaFecha,
    getInicioFinalSemana
};