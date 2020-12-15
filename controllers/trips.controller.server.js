const tripsService = require('../services/trips.service.server');
const activityService = require('../services/activities.service.server');
const logService = require('../services/logs.service.server');

module.exports = (app) => {
    app.get('/api/trips', (req, res) =>
        tripsService.findAllTrips()
            .then(allTrips => res.json(allTrips)));

    app.get('/api/trips/:tid', (req, res) =>
        tripsService.findTripById(req.params.tid)
            .then(trip => res.json(trip)));

    app.get('/api/users/:uid/trips', (req, res) =>
        tripsService.findAllTripsForUser(req.params.uid)
            .then(trips => res.json(trips)));

    app.get('/api/users/:uid/trips/attending', (req, res) =>
        tripsService.findAllTripsAttendingForUser(req.params.uid)
            .then(trips => res.json(trips)));

    app.delete('/api/trips/:tid', (req, res) =>
        tripsService.deleteTrip(req.params.tid)
            .then(trip => activityService.deleteActivitiesForTrip(req.params.tid)
                .then(response => logService.deleteLogsForTrip(req.params.tid)
                    .then(response => res.send(trip)))));

    app.post('/api/users/:uid/trips', (req, res) =>
        tripsService.createTrip(req.params.uid)
            .then(trip => res.json(trip)));

    app.put('/api/trips/:tid/cities/:cid', (req, res) =>
        tripsService.addCityToTrip(req.params.tid, req.params.cid)
            .then(trip => res.json(trip)));

    app.put('/api/trips/:tid/', (req, res) =>
        tripsService.updateTrip(req.params.tid, req.body)
            .then(trip => res.json(trip)));

    app.put('/api/trips/:tid/users/:uid', (req, res) =>
        tripsService.addAttendeeToTrip(req.params.tid, req.params.uid)
            .then(trip => res.json(trip)));

    app.get('/api/trips/aggregate/recent', (req, res) =>
        tripsService.findRecentTrips()
            .then(trips => res.json(trips)));
};
