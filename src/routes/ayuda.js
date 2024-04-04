// En tu archivo de ruta, por ejemplo, ayuda.js

const express = require('express');
const router = express.Router();

// Manejar las solicitudes GET a la página de ayuda
router.get('/', (req, res) => {
    res.render('ayuda'); // Renderizar la plantilla EJS para la página de ayuda
});

// Manejar las solicitudes POST a la página de ayuda
router.post('/', (req, res) => {
    const imgPath = req.body;
    console.log(imgPath);
    // Verificar si imgPath se recibió en la solicitud POST
    if (imgPath) {
        // Renderizar la plantilla EJS para la página de ayuda y pasar imgPath como variable
        res.render('ayuda', { imgPath: imgPath });
    } else {
        // Si no se recibió imgPath en la solicitud POST, simplemente renderizar la página de ayuda sin datos adicionales
        res.render('ayuda');
    }
});

module.exports = router;
