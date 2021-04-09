const router = require('express').Router();
const rsvpController = require('../../controllers/rsvpController');

// Submit RSVP route
router.route('/rsvp')
    .post(rsvpController.submitRSVP);

router.route('/sugg')
    .post(rsvpController.submitSuggestion);

module.exports = router;