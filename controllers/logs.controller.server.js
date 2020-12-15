const logService = require("../services/logs.service.server");

module.exports = (app) => {

    app.get('/api/logs', (req, res) =>
        logService.findAllLogs()
            .then(allLogs => res.send(allLogs)));

    app.get('/api/logs/:lid', (req, res) =>
        logService.findLogById(req.params.lid)
            .then(city => res.send(city)));

    app.get('/api/trips/:tid/logs', (req, res) =>
        logService.findLogForTrip(req.params.tid)
            .then(log => res.send(log)));

    app.post('/api/trips/:tid/logs', (req, res) =>
        logService.createLog(req.body)
            .then(log => res.send(log)));

    app.delete('/api/logs/:lid', (req, res) =>
        logService.deleteLog(req.params.lid)
            .then(log => res.send(log)));

    app.put('/api/logs/:lid', (req, res) =>
        logService.updateLog(req.params.lid, req.body)
            .then(log => res.send(log)));
}
