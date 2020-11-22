const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    infoId: String,
    userId: String,
    notes: String,
    places: [String]
    }, {collection: 'city'});

module.exports = citySchema;
