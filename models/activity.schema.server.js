const mongoose = require('mongoose');

const activitySchema = mongoose.Schema({
                                           dayId: String,
                                           title: String,
                                           notes: String,
                                           locationId: String,
                                           start: Date,
                                           end: Date
                                       }, {collection: 'activity'});

module.exports = activitySchema;
