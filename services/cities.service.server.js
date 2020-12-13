const citiesDao = require('../daos/cities.dao.server');

const findAllCities = () => citiesDao.findAllCities();

const findCityById = (cid) => citiesDao.findCityById(cid);

const findCitiesForUser = (uid) => citiesDao.findCitiesForUser(uid);

const createCityForUser = (uid, city) => {
    const newCity = {
        infoId: city.id,
        userId: uid,
        name: city.name,
        country: city.country,
        state: city.state,
        notes: ''
    }
    return citiesDao.createCity(newCity)
}

const deleteCity = (cid) => citiesDao.deleteCity(cid);

const updateCity = (cid, city) => citiesDao.updateCity(cid, city);

module.exports = {
    findAllCities,
    findCityById,
    findCitiesForUser,
    createCityForUser,
    deleteCity,
    updateCity
};
