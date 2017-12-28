const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');

// passport.js will use./models/User, therefor we will need to require(models/User) 1st, then require passport
require('./models/User');
require('./services/passport');

const app = express();

// enable cookie
app.use(
    cookieSession({
        // cookie max age, in ms
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys: [keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());

// use mongoose to connect to mongoDB
mongoose.connect(keys.mongoURI);



authRoutes(app);

//listen to PORT, for Heroku will be process.env.PORT, for local env, 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);