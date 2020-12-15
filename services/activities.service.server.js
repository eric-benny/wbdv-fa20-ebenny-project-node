const activitiesDao = require('../daos/activities.dao.server');

const findAllActivities = () => activitiesDao.findAllActivities();

const findActivityById = (aid) => activitiesDao.findActivityById(aid);

const findActivityForTrip = (tid) => activitiesDao.findActivityForTrip(tid);

const createActivity = (itinerary) => activitiesDao.createActivity(itinerary);

const deleteActivity = (aid) => activitiesDao.deleteActivity(aid);

const deleteActivitiesForTrip = (tid) => activitiesDao.deleteActivitiesForTrip(tid);

const updateActivity = (aid, activity) => activitiesDao.updateActivity(aid, activity);


module.exports = {
    findAllActivities,
    findActivityById,
    findActivityForTrip,
    createActivity,
    deleteActivity,
    updateActivity,
    deleteActivitiesForTrip
};
