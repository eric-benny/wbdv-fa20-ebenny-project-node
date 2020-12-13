const mongoose = require('mongoose');
const placeSchema = require('./places.schema.server');

const placeModel =
    mongoose.model('PlaceModel', placeSchema);

module.exports = placeModel;

