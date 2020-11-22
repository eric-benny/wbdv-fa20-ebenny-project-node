const mongoose = require('mongoose');

const daySchema = mongoose.Schema({
                                      itineraryId: String,
                                      notes: String,
                                  }, {collection: 'day'});

module.exports = daySchema;
