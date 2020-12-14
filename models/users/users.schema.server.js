const mongoose = require('mongoose');

const usersSchema = mongoose.Schema(
    {
        username: String,
        password: String,
        firstName: String,
        lastName: String,
        email: String,
        admin: { type: Boolean, default: false }
    }, {collection: 'users'});

module.exports = usersSchema;
