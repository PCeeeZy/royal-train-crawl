const { Reservation, Suggestion } = require('../models');

module.exports = {
    submitRSVP: function(req, res) {
        console.log(req.body)
        Reservation.create(req.body)
            .then(dbInsert => {
                res.json({
                    who: dbInsert
                })

            })
    },
    submitSuggestion: function(req, res) {
        Suggestion.create(req.body)
            .then(dbInsert => {
                res.json({
                    inserted: dbInsert
                })
            })
    }
};