// const service = require("../services/trip.service")

module.exports = (app) => {

    const findAllTripsForUser = (req, res) =>
        res.send(service.findAllTripsForUser(req.params['uid']))

    const findTripById = (req, res) =>
        res.send(service.findTripById(req.params['tid']))

    app.get("/api/users/:uid/trips", findAllTripsForUser)
    app.get("/api/trips/:tid", findTripById)
}
