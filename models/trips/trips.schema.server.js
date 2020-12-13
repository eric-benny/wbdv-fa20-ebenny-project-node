const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
    userId: String,
    name: String,
    date: Date,
    cities: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'CityModel'
    }],
    attendees: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'UserModel'
    }]
    }, {collection: 'trips'});

module.exports = tripSchema;
