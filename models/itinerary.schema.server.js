const mongoose = require('mongoose');

const itinerarySchema = mongoose.Schema({
                                           tripId: String,
                                           title: String
                                       }, {collection: 'itinerary'});

module.exports = itinerarySchema;
