const usersService = require('../services/users.service.server');

module.exports = (app) => {
    app.get('/api/users', (req, res) =>
        usersService.findAllUsers()
            .then(allUsers => res.json(allUsers)));
};
