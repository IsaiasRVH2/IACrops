// Importar los módulos necesarios
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

// Crear una instancia de Express
const app = express();

// Configurar el motor de plantillas EJS
app.set('view engine', 'ejs'); // Establecer el motor de plantillas como EJS
app.set('views', path.join(__dirname, 'views')); // Establecer la ruta de las vistas

// Configurar el puerto del servidor
const PORT = process.env.PORT || 3000;

// Configurar middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Definir las rutas
const indexRouter = require('./routes/index');
const recImagenesDashboardRouter = require('./routes/rec_imagenes_dashboard');
const ayudaRouter = require('./routes/ayuda');

app.use('/', indexRouter);
app.use('/rec_imagenes_dashboard', recImagenesDashboardRouter);
//app.use('/ayuda', ayudaRouter);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});