// load environment variables from a .env file into process.env
require('dotenv').config();
const express = require('express');
const path = require('path');
const routes = require('./routes');

const app = express();
// process.env.PORT can be set using the command line, e.g.: PORT=3000 npm start or through a .env file
const PORT = process.env.PORT || 3000;

// Serve static files (HTML, CSS, JavaScript)
app.use(express.static(path.join(__dirname, 'public')));

// Use routes
app.use('/', routes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
