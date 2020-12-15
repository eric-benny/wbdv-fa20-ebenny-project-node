const activitySchema = require('./activities.schema.server');
const mongoose = require('mongoose');
const activityModel =
    mongoose.model('ActivityModel', activitySchema);

module.exports = activityModel;
