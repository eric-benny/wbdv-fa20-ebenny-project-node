const tripsModel = require('../models/trips/trips.model.server');

const findAllTrips = () => tripsModel.find();

const findTripById = (tid) => tripsModel.findById(tid).populate('cities');

const findAllTripsForUser = (userId) => tripsModel.find({userId: userId});

const deleteTrip = (tid) => tripsModel.remove({_id: tid});

module.exports = { findAllTrips, findTripById, findAllTripsForUser, deleteTrip };
