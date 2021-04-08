const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');

// USE API ROUTES
router.use('/api', apiRoutes);

// If no API routes hit, send index.html
router.use((req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"))
});

module.exports = router;