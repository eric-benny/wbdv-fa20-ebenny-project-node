const mongoose = require('mongoose');

const locationSchema = mongoose.Schema({
                                           infoId: String,
                                           cityId: String,
                                           notes: String,
                                           trips: [String]
                                       }, {collection: 'location'});

module.exports = locationSchema;
