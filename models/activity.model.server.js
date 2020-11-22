const activitySchema = require('./activity.schema.server');
const mongoose = require('mongoose');
const activityModel =
    mongoose.model('ActivityModel', activitySchema);

activityModel.findAllActivities = findAllActivities;
module.exports = activityModel;

function findAllActivities() { return activityModel.find(); }
