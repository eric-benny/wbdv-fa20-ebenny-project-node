const usersModel = require('../models/users/users.model.server');

const findAllUsers = () => usersModel.find();

module.exports = { findAllUsers };
