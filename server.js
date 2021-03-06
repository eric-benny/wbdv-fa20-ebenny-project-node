const express = require("express");
const app = express();

const session = require('express-session');
app.use(session({
                    resave: false,
                    saveUninitialized: true,
                    secret: 'any string',
                    proxy: true,
                    cookie: { sameSite: 'none', secure: true }
                }));

const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://ebenny:ebenny123@wbdv-fa20-ebenny-projec.afo3z.mongodb.net/traveler?retryWrites=true&w=majority',
                 {useNewUrlParser: true,
                     useUnifiedTopology: true});


// app.use(session({
//                     resave: false,
//                     saveUninitialized: true,
//                     secret: 'any string'
//                 }));
//
// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/traveler',
//                  {useNewUrlParser: true,
//                      useUnifiedTopology: true});

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// https://wbdv-fa20-ebenny-project-react.herokuapp.com
// http://localhost:3001
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin",
               "http://wbdv-fa20-ebenny-project-react.herokuapp.com");
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
require('./controllers/activities.controller.server')(app);
require('./controllers/logs.controller.server')(app);

app.listen(process.env.PORT || 3000);
