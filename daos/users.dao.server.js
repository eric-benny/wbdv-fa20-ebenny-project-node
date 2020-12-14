const usersModel = require('../models/users/users.model.server');

const findAllUsers = () => usersModel.find();

const addUser = (user) => usersModel.create(user);

const findUserLogin = (username, password) => usersModel.findOne({username: username, password: password});

const findUsername = (username) => usersModel.findOne({username: username});

const createUser = (user) => usersModel.create(user);

const updateUser = (uid, user) => usersModel.updateOne({_id: uid},
                                                     {$set: user});

module.exports = { findAllUsers, addUser, findUserLogin, findUsername, createUser, updateUser };
