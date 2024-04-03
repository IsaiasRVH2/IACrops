// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Crear una instancia de Express
const app = express();

// Configurar el puerto del servidor
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Definir las rutas
const indexRouter = require('./src/routes/index');
const recImagenesDashboardRouter = require('./src/routes/rec_imagenes_dashboard');
const ayudaRouter = require('./src/routes/ayuda');

app.use('/', indexRouter);
app.use('/rec_imagenes_dashboard', recImagenesDashboardRouter);
app.use('/ayuda', ayudaRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});