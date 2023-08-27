import pdf from 'html-pdf';
import pug from 'pug';
import path from 'path';
import url from 'url';
import { getInicioFinalSemana } from '../helpers/fecha.helper.js';
import { getTotalDiferencia } from '../helpers/informe.helper.js';

export const generaPdf = (usuario, transacciones, cuenta) => {
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

    let nombrePdf = `informe_semana_${fechaInicial}_${usuario.nombre}.pdf`;
    let raizDir = path.dirname(
        url.fileURLToPath(new URL(import.meta.url))
    );

    const pdfPath = path.join(raizDir, '..', 'pdfs', nombrePdf);

    return new Promise((resolve, reject) => {
        pdf.create(htmlOutput).toFile(pdfPath, (err, res) => {
            if (err) reject(err);
            resolve(res);
        });
    });
};