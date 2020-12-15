const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
                                           tripId: String,
                                           title: String,
                                           notes: String,
                                           locationId: String,
                                           date: Date
                                       }, {collection: 'activity'});

module.exports = activitySchema;
