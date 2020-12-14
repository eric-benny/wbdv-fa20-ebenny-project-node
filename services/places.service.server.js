const placesDao = require('../daos/places.dao.server');

const findAllPlaces = () => placesDao.findAllPlaces();

const findPlaceById = (pid) => placesDao.findPlaceById(pid);

const findPlacesForUser = (uid) => placesDao.findPlacesForUser(uid);

const findPlacesForCity = (cid) => placesDao.findPlacesForCity(cid);

const createPlaceForUser = (uid, cid, place) => {
    const newPlace = {
        infoId: place.id,
        infoType: place.idType,
        userId: uid,
        cityId: cid,
        name: place.name,
        type: place.type,
        details: place.details,
        icon: place.icon,
        notes: ''
    };
    return placesDao.createPlace(newPlace)
};

const deletePlace = (pid) => placesDao.deletePlace(pid);

const deletePlacesForCity = (cid) => placesDao.deletePlacesForCity(cid);

const updatePlace = (pid, place) => placesDao.updatePlace(pid, place);

const addTripToPlace = (pid, tid) => placesDao.addTripToPlace(pid, tid)

module.exports = {
    findAllPlaces,
    findPlaceById,
    findPlacesForUser,
    createPlaceForUser,
    findPlacesForCity,
    deletePlace,
    deletePlacesForCity,
    updatePlace,
    addTripToPlace
};
