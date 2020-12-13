const placesModel = require('../models/places/places.model.server');

const findAllPlaces = () => placesModel.find();

const findPlaceById = (pid) => placesModel.findById(pid);

const findPlacesForUser = (uid) => placesModel.find({userId: uid});

const findPlacesForCity = (cid) => placesModel.find({cityId: cid});

const createPlace = (place) => placesModel.create(place);

const deletePlace = (pid) => placesModel.remove({_id: pid});

const deletePlacesForCity = (cid) => placesModel.remove({cityId: cid});

const updatePlace = (pid, place) => placesModel.update({_id: pid},
                                                     {$set: place});

module.exports = {
    findAllPlaces,
    findPlaceById,
    findPlacesForUser,
    createPlace,
    findPlacesForCity,
    deletePlace,
    deletePlacesForCity,
    updatePlace
};
