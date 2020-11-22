const entrySchema = require('./entry.schema.server');
const mongoose = require('mongoose');
const entryModel =
    mongoose.model('EntryModel', entrySchema);

entryModel.findAllEntries = findAllEntries;
module.exports = entryModel;

function findAllEntries() { return entryModel.find(); }
