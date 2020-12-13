const placesDao = require('../daos/places.dao.server');

const findAllPlaces = () => placesDao.findAllPlaces();

const findPlaceById = (pid) => placesDao.findPlaceById(pid);

const findPlacesForUser = (uid) => placesDao.findPlacesForUser(uid);

const findPlacesForCity = (cid) => placesDao.findPlacesForCity(cid);

const createPlaceForUser = (uid, cid, place) => {
    const newPlace = {
        infoId: place.id,
        userId: uid,
        cityId: cid,
        name: place.name,
        type: place.type,
        details: place.details,
        notes: ''
    }
    return placesDao.createPlace(newPlace)
}

module.exports = { findAllPlaces, findPlaceById, findPlacesForUser, createPlaceForUser, findPlacesForCity };
