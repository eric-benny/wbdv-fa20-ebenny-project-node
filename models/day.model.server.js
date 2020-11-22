const daySchema = require('./day.schema.server');
const mongoose = require('mongoose');
const dayModel =
    mongoose.model('DayModel', daySchema);

dayModel.findAllDays = findAllDays;
module.exports = dayModel;

function findAllDays() { return dayModel.find(); }
