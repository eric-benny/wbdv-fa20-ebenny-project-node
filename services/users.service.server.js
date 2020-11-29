const usersDao = require('../daos/users.dao.server');

const findAllUsers = () => usersDao.findAllUsers();

module.exports = { findAllUsers };
