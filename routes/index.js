const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../templates/index.html'));
});

// Additional routes go here

module.exports = router;