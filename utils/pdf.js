const pdf = require('html-pdf');
const pug = require('pug');

const generaPdf = () => {
    const htmlOutput = pug.renderFile('./views/pdf.pug', {
        name: 'Fernando',
        cuenta: 'Cuenta 1'
    });

    return new Promise((resolve, reject) => {
        pdf.create(htmlOutput).toFile(__dirname+'/../pdfs/informe.pdf', (err, res) => {
            if (err) reject(err);
            else resolve(res);
        });
    });
};

module.exports = generaPdf;