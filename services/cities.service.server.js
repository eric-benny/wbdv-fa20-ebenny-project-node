const citiesDao = require('../daos/cities.dao.server');

const findAllCities = () => citiesDao.findAllCities();

const findCityById = (cid) => citiesDao.findCityById(cid);

const findCitiesForUser = (uid) => citiesDao.findCitiesForUser(uid);

module.exports = { findAllCities, findCityById, findCitiesForUser };
