const express = require('express');
const router = express.Router();
const { getTimestamp } = require('./controller/timestampController'); // <-- fix path

// Root endpoint (optional, can show a welcome message or instructions)
router.get('/', (req, res) => {
  res.send('Timestamp Microservice');
});

// API endpoint with optional date parameter
router.get('/api/:date?', getTimestamp);

module.exports = router;