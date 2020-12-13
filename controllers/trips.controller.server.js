const tripsService = require('../services/trips.service.server');

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
    app.delete('/api/trips/:tid', (req, res) =>
        tripsService.deleteTrip(req.params.tid)
            .then(response => res.send(response)));
};
