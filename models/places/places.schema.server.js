const mongoose = require('mongoose');

const placeSchema = mongoose.Schema({
    infoId: String,
    infoType: String,
    userId: String,
    cityId: String,
    name: String,
    type: String,
    details: String,
    icon: String,
    notes: String,
    trips: [String],
    lastVisited: Date
    }, {collection: 'places'});

module.exports = placeSchema;
