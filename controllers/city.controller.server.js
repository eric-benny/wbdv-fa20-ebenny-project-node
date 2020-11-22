// const service = require("../services/city.service")

module.exports = (app) => {

    const findAllCitiesForUser = (req, res) =>
        res.send(service.findAllCitiesForUser(req.params['uid']))

    const findCityById = (req, res) =>
        res.send(service.findCityById(req.params['cid']))

    const findAllCitiesForTrip = (req, res) =>
        res.send(service.findAllCitiesForTrip(req.params['tid']))

    app.get("/api/users/:uid/cities", findAllCitiesForUser)
    app.get("/api/trips/:uid/cities", findAllCitiesForTrip)
    app.get("/api/cities/:cid", findCityById)
}
