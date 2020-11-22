// const service = require("../services/location.service")

module.exports = (app) => {

    const findAllLocationsForCity = (req, res) =>
        res.send(service.findAllLocationsForCity(req.params['cid']))

    const findLocationById = (req, res) =>
        res.send(service.findLocationById(req.params['lid']))

    app.get("/api/cities/:cid/locations", findAllLocationsForCity)
    app.get("/api/trips/:lid", findLocationById)
}
