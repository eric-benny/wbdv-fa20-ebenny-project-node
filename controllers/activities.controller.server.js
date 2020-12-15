const activityService = require("../services/activities.service.server");

module.exports = (app) => {

    app.get('/api/activities', (req, res) =>
        activityService.findAllActivities()
            .then(allActivities => res.send(allActivities)));

    app.get('/api/activities/:aid', (req, res) =>
        activityService.findActivityById(req.params.aid)
            .then(city => res.send(city)));

    app.get('/api/trips/:tid/activities', (req, res) =>
        activityService.findActivityForTrip(req.params.tid)
            .then(activity => res.send(activity)));

    app.post('/api/trips/:tid/activities', (req, res) =>
        activityService.createActivity(req.body)
            .then(activity => res.send(activity)));

    app.delete('/api/activities/:aid', (req, res) =>
        activityService.deleteActivity(req.params.aid)
            .then(activity => res.send(activity)));

    app.put('/api/activities/:aid', (req, res) =>
        activityService.updateActivity(req.params.aid, req.body)
            .then(activity => res.send(activity)));
}
