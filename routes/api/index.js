const router = require('express').Router();
const rsvpController = require('../../controllers/rsvpController');

// Submit RSVP route
router.route('/rsvp')
    .post(rsvpController.submitRSVP);

module.exports = router;