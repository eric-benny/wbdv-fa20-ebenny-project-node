const usersDao = require('../daos/users.dao.server');

const findAllUsers = () => usersDao.findAllUsers();

const register = (userDetails) => {
    const username = userDetails.username;
    const password = userDetails.password;
    const firstName = userDetails.firstName;
    const lastName = userDetails.lastName;
    const email = userDetails.email;

    const user = {username, password, firstName, lastName, email};

    return usersDao.findUsername(username)
        .then(existingUser => {
            if (existingUser) {
                return 403
            } else {
                return usersDao.createUser(user)
            }
        });

};

const login = (userCredentials) => {
    //console.log(userCredentials)
    const username = userCredentials.username;
    const password = userCredentials.password;

    return usersDao.findUserLogin(username, password)
        .then(user => {
            if (user) {
                return user
            } else {
                return 403
            }
        })
};

module.exports = { findAllUsers, register, login };
