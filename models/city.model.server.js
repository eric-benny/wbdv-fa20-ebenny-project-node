const citySchema = require('./city.schema.server');
const mongoose = require('mongoose');
const cityModel =
    mongoose.model('CityModel', citySchema);

cityModel.findAllCities = findAllCities;
module.exports = cityModel;

function findAllCities() { return cityModel.find(); }
