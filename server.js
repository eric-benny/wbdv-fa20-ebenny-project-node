const express = require("express");
const app = express();

const session = require('express-session')
app.use(session({
                    resave: false,
                    saveUninitialized: true,
                    secret: 'any string'
                }));

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/traveler',
                 {useNewUrlParser: true,
                     useUnifiedTopology: true});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
               "http://localhost:3001");
    res.header("Access-Control-Allow-Headers",
               "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods",
               "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

require('./controllers/users.controller.server')(app);
require('./controllers/cities.controller.server')(app);
require('./controllers/trips.controller.server')(app);
require('./controllers/places.controller.server')(app);
// require('./controllers/itinerary.controller.server')(app);
// require('./controllers/day.controller.server')(app);
// require('./controllers/activity.controller.server')(app);
// require('./controllers/log.controller.server')(app);
// require('./controllers/entry.controller.server')(app);

app.listen(3000);
