const citiesService = require('../services/cities.service.server');

module.exports = (app) => {
    app.get('/api/cities', (req, res) =>
        citiesService.findAllCities()
            .then(allCities => res.send(allCities)));
    app.get('/api/cities/:cid', (req, res) =>
        citiesService.findCityById(req.params.cid)
            .then(city => res.send(city)));
    app.get('/api/users/:uid/cities', (req, res) =>
        citiesService.findCitiesForUser(req.params.uid)
            .then(cities => res.send(cities)));
    app.post('/api/users/:uid/cities', (req, res) =>
        citiesService.createCityForUser(req.params.uid, req.body)
            .then(city => res.send(city)));
};
