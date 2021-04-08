module.exports = {
    submitRSVP: function(req, res) {
        console.log(req.body)
        res.json({
            who: req.body
        })
    }
}