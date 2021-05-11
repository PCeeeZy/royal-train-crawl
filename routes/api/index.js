const router = require('express').Router();
const rsvpController = require('../../controllers/rsvpController');
const mediaController = require('../../controllers/mediaController');

// Submit RSVP route
router.route('/rsvp')
    .post(rsvpController.submitRSVP);
    //need get route to gather the data for front end chart

router.route('/sugg')
    .post(rsvpController.submitSuggestion);


router.route('/media')
    .post(mediaController.uploadMediaAuto);

module.exports = router;