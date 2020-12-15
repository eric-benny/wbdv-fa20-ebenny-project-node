const logSchema = require('./logs.schema.server');
const mongoose = require('mongoose');
const logModel =
    mongoose.model('LogModel', logSchema);

module.exports = logModel;
