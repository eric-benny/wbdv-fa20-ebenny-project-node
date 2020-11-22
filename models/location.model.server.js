const locationSchema = require('./location.schema.server');
const mongoose = require('mongoose');
const locationModel =
    mongoose.model('LocationModel', locationSchema);

locationModel.findAllLocations = findAllLocations;
module.exports = locationModel;

function findAllLocations() { return locationModel.find(); }
