// const service = require("../services/itinerary.service")

module.exports = (app) => {

    const findItineraryForTrip = (req, res) =>
        res.send(service.findItineraryForTrip(req.params['tid']))

    app.get("/api/trips/:tid/itinerary", findItineraryForTrip)
}
