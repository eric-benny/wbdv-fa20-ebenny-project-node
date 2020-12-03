const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    userId: String,
    name: String,
    date: String,
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CityModel'
    }]
    }, {collection: 'trips'});

module.exports = tripSchema;
