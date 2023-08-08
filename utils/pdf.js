const pdf = require('html-pdf');
const pug = require('pug');

const generaPdf = (usuario) => {
    let nombreCompleto = usuario.nombre + ' ' + usuario.apellidos;
    const htmlOutput = pug.renderFile('./views/index.pug', {
        usuario,
        nombreCompleto,
        diferencia: '80€'
    });

    return new Promise((resolve, reject) => {
        pdf.create(htmlOutput).toFile(__dirname+'/../pdfs/informe.pdf', (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};

module.exports = generaPdf;