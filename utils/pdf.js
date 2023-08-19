const pdf = require('html-pdf');
const pug = require('pug');
const { getInicioFinalSemana } = require('../helpers/fecha.helper');
const { getTotalDiferencia } = require('../helpers/informe.helper');

const generaPdf = (usuario, transacciones, cuenta) => {
    let nombreCompleto = usuario.nombre + ' ' + usuario.apellidos;

    //FORMATEO DE FECHAS SEMANALES
    let { fechaInicial, fechaFinal } = getInicioFinalSemana(transacciones[0].fecha);

    const htmlOutput = pug.renderFile('./views/index.pug', {
        usuario,
        nombreCompleto,
        transacciones,
        cuenta,
        fechaInicial,
        fechaFinal,
        diferencia: getTotalDiferencia(transacciones),
    });

    let nombrePdf = `informe_semana_${fechaInicial}-${usuario.nombre}`;

    return new Promise((resolve, reject) => {
        pdf.create(htmlOutput).toFile(__dirname+`/../pdfs/${nombrePdf}.pdf`, (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};

module.exports = generaPdf;