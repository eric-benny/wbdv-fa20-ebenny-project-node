const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
                                           tripId: String,
                                           title: String
                                       }, {collection: 'log'});

module.exports = logSchema;
