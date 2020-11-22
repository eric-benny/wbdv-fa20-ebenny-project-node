// const service = require("../services/entry.service")

module.exports = (app) => {

    const findAllEntriesForLog = (req, res) =>
        res.send(service.findAllEntriesForLog(req.params['lid']))

    app.get("/api/logs/:lid/entries", findAllEntriesForLog)
}
