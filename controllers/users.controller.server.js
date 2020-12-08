const usersService = require('../services/users.service.server');

module.exports = (app) => {
    app.get('/api/users', (req, res) =>
        usersService.findAllUsers()
            .then(allUsers => res.send(allUsers)));


    app.post("/api/users/register", (req, res) =>
        usersService.register(req.body)
            .then(user => {
                if (isNaN(user)) {
                    res.send(user)
                } else {
                    res.sendStatus(user)
                }
            }));

    app.post("/api/users/login", (req, res) =>
        usersService.login(req.body)
            .then(user => {
                if (isNaN(user)) {
                    req.session["profile"] = user
                    res.send(user)
                } else {
                    res.sendStatus(user)
                }
            }));

    app.get("/api/users/logout", (req, res) => {
        req.session.destroy();
        res.send(200)
    })
};
