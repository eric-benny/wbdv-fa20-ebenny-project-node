// const service = require("../services/trip.service")

module.exports = (app) => {

    const findAllActivitiesForDay = (req, res) =>
        res.send(service.findAllActivitiesForDay(req.params['uid']))

    app.get("/api/days/:did/activities", findAllActivitiesForDay)
}
