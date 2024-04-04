// routes/index.js

const express = require('express');

const router = express.Router();

const axios = require('axios');
const path = require('path');

const project = '1017935596806';
const location = 'us-central1';
const endpointId = '3404798284106039296';

const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/endpoints/${endpointId}:explain`;

router.post('/prediction', async (req, res) => {
  try {
      const project = 'YOUR_PROJECT_ID';
      const location = 'YOUR_LOCATION';
      const endpointId = 'YOUR_ENDPOINT_ID';

      const url = `https://${location}-aiplatform.googleapis.com/v1/projects/${project}/locations/${location}/endpoints/${endpointId}:explain`;

      const requestData = req.body.requestData;

      const response = await axios.post(url, requestData);
      res.json(response.data);
  } catch (error) {
      console.error('Error al realizar la solicitud:', error.message);
      res.status(500).json({ error: 'Error al realizar la solicitud' });
  }
});



// Ruta raíz
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;