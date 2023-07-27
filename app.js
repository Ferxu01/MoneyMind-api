const { PORT } = require('./config');
const express = require('express');

const routerTransaccion = require('./routes/transaccion.routes');
const routerCuenta = require('./routes/cuenta.routes');
const routerAuth = require('./routes/auth.routes');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use('/transaccion', routerTransaccion);
app.use('/cuenta', routerCuenta);
app.use('/auth', routerAuth);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});