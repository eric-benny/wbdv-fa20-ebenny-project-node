const placesModel = require('../models/places/places.model.server');

const findAllPlaces = () => placesModel.find();

const findPlaceById = (pid) => placesModel.findById(pid);

const findPlacesForUser = (uid) => placesModel.find({userId: uid});

const findPlacesForCity = (cid) => placesModel.find({cityId: cid});

const createPlace = (place) => placesModel.create(place);

module.exports = { findAllPlaces, findPlaceById, findPlacesForUser, createPlace, findPlacesForCity };
