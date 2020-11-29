const tripsDao = require('../daos/trips.dao.server');

const findAllTrips = () => tripsDao.findAllTrips();

const findTripById = (tid) => tripsDao.findTripById(tid);

const findAllTripsForUser = (userId) => tripsDao.findAllTripsForUser(userId);

module.exports = { findAllTrips, findTripById, findAllTripsForUser };
