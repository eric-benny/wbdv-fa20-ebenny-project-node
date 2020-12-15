const activityModel = require('../models/activities/activities.model.server');

const findAllActivities = () => activityModel.find();

const findActivityById = (aid) => activityModel.findById(aid);

const findActivityForTrip = (tid) => activityModel.find({tripId: tid});

const createActivity = (activity) => activityModel.create(activity);

const deleteActivity = (aid) => activityModel.remove({_id: aid});

const updateActivity = (aid, activity) => activityModel.updateOne({_id: aid},
                                                                  {$set: activity});

const deleteActivitiesForTrip = (tid) => activityModel.remove({tripId: tid});

module.exports = {
    findAllActivities,
    findActivityById,
    findActivityForTrip,
    createActivity,
    deleteActivity,
    deleteActivitiesForTrip,
    updateActivity
};
