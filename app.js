const { PORT } = require('./config');
const express = require('express');
const { errorHandler } = require('./middlewares/errors.middleware');

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Templates engine
app.set('view engine', 'pug');

app.get('/', (req, res) => {
  res.send('¡Hola, mundo!');
});

app.use(require('./routes'));

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});