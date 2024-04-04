// routes/rec_imagenes_dashboard.js

const express = require('express');
const path = require('path');
const router = express.Router();

// Ruta para cargar la página rec_imagenes_dashboard
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/rec_imagenes_dashboard.html'));
});

module.exports = router;