const express = require('express');
const app = express();
const apiRoutes = require('../server/server');

// Use the router for all routes
app.use('/', apiRoutes);

// Set the port
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;