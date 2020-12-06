const mongoose = require('mongoose');

const citySchema = mongoose.Schema({
    infoId: String,
    userId: String,
    name: String,
    country: String,
    state: String,
    notes: String
    }, {collection: 'cities'});

module.exports = citySchema;
