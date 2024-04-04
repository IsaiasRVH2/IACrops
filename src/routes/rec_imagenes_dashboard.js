// En tu archivo de ruta, por ejemplo, rec_imagenes_dashboard.js

const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    const imgPath = req.body.img_path;
    console.log('Ruta de la imagen:', imgPath);
    
    // Renderizar la plantilla EJS 'rec_imagenes_dashboard.ejs' y pasar la ruta de la imagen como variable
    res.render('rec_imagenes_dashboard', { imgPath: imgPath });
});

module.exports = router;