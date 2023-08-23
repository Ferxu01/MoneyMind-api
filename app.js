import { PORT } from './config.js';
import express from 'express';
import { errorHandler } from './middlewares/errors.middleware.js';
import { responseError } from './utils/index.js';
import routes from './routes/index.js';

import cors from './middlewares/cors.js';

const app = express();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors);

// Templates engine
app.set('view engine', 'pug');

app.use(routes);

//Si una ruta/servicio no se encuentra
app.use((req, res) => {
  responseError(res, 404, 'Esta ruta no existe');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});