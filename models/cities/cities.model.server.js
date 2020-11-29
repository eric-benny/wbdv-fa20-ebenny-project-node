const mongoose = require('mongoose');
const citySchema = require('./cities.schema.server');

const cityModel =
    mongoose.model('CityModel', citySchema);

module.exports = cityModel;
