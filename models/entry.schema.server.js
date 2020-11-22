const mongoose = require('mongoose');

const entrySchema = mongoose.Schema({
                                        logId: String,
                                        title: String,
                                        description: String,
                                        picture: String
                                    }, {collection: 'entry'});

module.exports = entrySchema;
