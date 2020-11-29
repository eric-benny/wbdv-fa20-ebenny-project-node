const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
                                     username: String,
                                     password: String,
                                     firstName: String,
                                     lastName: String,
                                     email: String
                                 }, {collection: 'users'});

module.exports = usersSchema;
