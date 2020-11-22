// const service = require("../services/day.service")

module.exports = (app) => {

    const findAllDaysForItinerary = (req, res) =>
        res.send(service.findAllDaysForItinerary(req.params['iid']))

    app.get("/api/itineraries/:iid/days", findAllDaysForItinerary)
}
