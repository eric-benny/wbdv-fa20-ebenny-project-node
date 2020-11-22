const itinerarySchema = require('./itinerary.schema.server');
const mongoose = require('mongoose');
const itineraryModel =
    mongoose.model('ItineraryModel', itinerarySchema);

itineraryModel.findAllItineraries = findAllItineraries;
module.exports = itineraryModel;

function findAllItineraries() { return itineraryModel.find(); }
