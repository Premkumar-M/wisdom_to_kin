const express = require('express');
const router = express.Router();

// Define routes
router.get('/home', (req, res) => res.send('Home'));

module.exports = router;