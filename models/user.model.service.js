const userSchema = require('./user.schema.server');
const mongoose = require('mongoose');
const userModel =
    mongoose.model('UserModel', userSchema);

userModel.findAllUsers = findAllUsers;
module.exports = userModel;

function findAllUsers() { return userModel.find(); }
