const { PORT } = require('./config');
const express = require('express');

const routerTransaccion = require('./routes/transaccion.routes');

const app = express();

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/transaccion', routerTransaccion);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});