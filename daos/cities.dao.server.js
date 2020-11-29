const citiesModel = require('../models/cities/cities.model.server');

const findAllCities = () => citiesModel.find();

const findCityById = (cid) => citiesModel.findById(cid);

const findCitiesForUser = (uid) => citiesModel.find({userId: uid});

module.exports = { findAllCities, findCityById, findCitiesForUser };
