const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('../config/keys');
const mongoose = require('mongoose');

// instead of require User.js which might casue an error, use this instead
const User = mongoose.model('users');

// use passport.serializeUser to create a token for the cookie
passport.serializeUser((user, done) => {
  // this user.id is the _id in the MongoDB
  done(null, user.id);
});

// deserializeUser
passport.deserializeUser((id, done) => {
  User.findById(id)
    .then(user => {
      done(null, user);
    });
});

// setup google oauth
passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback',
  proxy: true
}, 
async (accessToken, refreshToken, profile, done) => {
  const existingUser = await User.findOne({googleId: profile.id});
    if (existingUser) {
      // the user exist
      done(null, existingUser);
    } else {
      // crate a new User, then save it in the database
      const user = await new User({ googleId: profile.id }).save();
      done(null, user);
    }
}));