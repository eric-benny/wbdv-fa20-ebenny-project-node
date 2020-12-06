const citiesModel = require('../models/cities/cities.model.server');

const findAllCities = () => citiesModel.find();

const findCityById = (cid) => citiesModel.findById(cid);

const findCitiesForUser = (uid) => citiesModel.find({userId: uid});

const createCity = (city) => citiesModel.create(city);

module.exports = { findAllCities, findCityById, findCitiesForUser, createCity };
