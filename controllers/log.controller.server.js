// const service = require("../services/log.service")

module.exports = (app) => {

    const findLogForTrip = (req, res) =>
        res.send(service.findLogForTrip(req.params['tid']))

    app.get("/api/trips/:tid/log", findLogForTrip)
}
