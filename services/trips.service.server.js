const tripsDao = require('../daos/trips.dao.server');

const findAllTrips = () => tripsDao.findAllTrips();

const findTripById = (tid) => tripsDao.findTripById(tid);

const findAllTripsForUser = (userId) => tripsDao.findAllTripsForUser(userId);

const deleteTrip = (tid) => tripsDao.deleteTrip(tid);

const createTrip = (uid) => tripsDao.createTrip(uid);

const addCityToTrip = (tid, cid) => tripsDao.addCityToTrip(tid, cid);

const updateTrip = (tid, trip) => tripsDao.updateTrip(tid, trip);

const addAttendeeToTrip = (tid, uid) => tripsDao.addAttendeeToTrip(tid, uid);

const findAllTripsAttendingForUser = (uid) => tripsDao.findAllTripsAttendingForUser(uid);

module.exports = {
    findAllTrips,
    findTripById,
    findAllTripsForUser,
    deleteTrip,
    createTrip,
    addCityToTrip,
    updateTrip,
    addAttendeeToTrip,
    findAllTripsAttendingForUser
};
