const placesService = require("../services/places.service.server");

module.exports = (app) => {

    app.get('/api/places', (req, res) =>
        placesService.findAllPlaces()
            .then(allPlaces => res.send(allPlaces)));
    app.get('/api/places/:pid', (req, res) =>
        placesService.findPlaceById(req.params.pid)
            .then(place => res.send(place)));
    app.get('/api/users/:uid/places', (req, res) =>
        placesService.findPlacesForUser(req.params.uid)
            .then(places => res.send(places)));
    app.get('/api/cities/:cid/places', (req, res) =>
        placesService.findPlacesForCity(req.params.cid)
            .then(places => res.send(places)));
    app.post('/api/users/:uid/cities/:cid/places', (req, res) =>
        placesService.createPlaceForUser(req.params.uid, req.params.cid, req.body)
            .then(place => res.send(place)));
    app.delete('/api/places/:pid', (req, res) =>
        placesService.deletePlace(req.params.pid)
            .then(response => res.send(response)));
    app.put('/api/places/:pid', (req, res) =>
        placesService.updatePlace(req.params.pid, req.body)
            .then(place => res.send(place)));
};
