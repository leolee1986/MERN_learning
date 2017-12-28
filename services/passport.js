const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// instead of require User.js which might casue an error, use this instead
const User = mongoose.model('users');

// setup google oauth
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  User.findOne({
      googleId: profile.id
    })
    .then((existingUser) => {
      if (existingUser) {
        // the user exist
      } else {
        // crate a new User, then save it in the database
        new User({
          googleId: profile.id
        }).save();
      }
    });

}));