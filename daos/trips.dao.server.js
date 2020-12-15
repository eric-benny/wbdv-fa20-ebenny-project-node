const tripsModel = require('../models/trips/trips.model.server');

const findAllTrips = () => tripsModel.find();

const findTripById = (tid) => tripsModel.findById(tid).populate('cities').populate('attendees');

const findAllTripsForUser = (userId) => tripsModel.find({userId: userId});

const deleteTrip = (tid) => tripsModel.remove({_id: tid});

const createTrip = (uid) => tripsModel.create({name: "New Trip", userId: uid});

const addCityToTrip = (tid, cid) => tripsModel.updateOne({_id: tid},
                                                         {$push: { cities: cid } });

const updateTrip = (tid, trip) => tripsModel.updateOne({_id: tid},
                                                     {$set: trip});

const addAttendeeToTrip = (tid, uid) => tripsModel.updateOne({_id: tid},
                                                         {$push: { attendees: uid } });

const findAllTripsAttendingForUser = (userId) => tripsModel.find({attendees: userId});

const findRecentTrips = () => tripsModel.find().sort({date: -1}).limit(10);

module.exports = {
    findAllTrips,
    findTripById,
    findAllTripsForUser,
    deleteTrip,
    createTrip,
    addCityToTrip,
    updateTrip,
    addAttendeeToTrip,
    findAllTripsAttendingForUser,
    findRecentTrips
};
