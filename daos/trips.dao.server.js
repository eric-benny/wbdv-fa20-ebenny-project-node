const tripsModel = require('../models/trips/trips.model.server');

const findAllTrips = () => tripsModel.find();

const findTripById = (tid) => tripsModel.findById(tid).populate('cities');

const findAllTripsForUser = (userId) => tripsModel.find({userId: userId});

module.exports = { findAllTrips, findTripById, findAllTripsForUser };
