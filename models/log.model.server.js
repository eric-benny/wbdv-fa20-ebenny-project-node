const logSchema = require('./log.schema.server');
const mongoose = require('mongoose');
const logModel =
    mongoose.model('LogModel', logSchema);

logModel.findAllLocations = findAllLogs;
module.exports = logModel;

function findAllLogs() { return logModel.find(); }
