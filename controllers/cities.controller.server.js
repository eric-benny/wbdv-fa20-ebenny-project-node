const citiesService = require('../services/cities.service.server');

module.exports = (app) => {
    app.get('/api/cities', (req, res) =>
        citiesService.findAllCities()
            .then(allCities => res.json(allCities)));
    app.get('/api/cities/:cid', (req, res) =>
        citiesService.findCityById(req.params.cid)
            .then(city => res.json(city)));
    app.get('/api/users/:uid/cities', (req, res) =>
        citiesService.findCitiesForUser(req.params.uid)
            .then(cities => res.json(cities)));
};
