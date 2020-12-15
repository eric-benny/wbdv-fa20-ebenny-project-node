const mongoose = require('mongoose');

const logSchema = mongoose.Schema({
                                      tripId: String,
                                      title: String,
                                      description: String,
                                       }, {collection: 'log'});

module.exports = logSchema;
