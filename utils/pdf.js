const pdf = require('html-pdf');
const pug = require('pug');
const { getInicioFinalSemana } = require('../helpers/fecha.helper');
const { getTotalDiferencia } = require('../helpers/informe.helper');

const generaPdf = (usuario, transacciones) => {
    let nombreCompleto = usuario.nombre + ' ' + usuario.apellidos;

    //FORMATEO DE FECHAS SEMANALES
    let { fechaInicial, fechaFinal } = getInicioFinalSemana(transacciones[0].fecha);

    const htmlOutput = pug.renderFile('./views/index.pug', {
        usuario,
        nombreCompleto,
        transacciones,
        fechaInicial,
        fechaFinal,
        diferencia: getTotalDiferencia(transacciones),
    });

    return new Promise((resolve, reject) => {
        pdf.create(htmlOutput).toFile(__dirname+'/../pdfs/informe.pdf', (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};

module.exports = generaPdf;