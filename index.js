const express = require("express");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const keys = require('./config/keys.js');

const app = express();

// setup google oauth
passport.use(new GoogleStrategy({
  clientID:keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL:'/auth/google/callback'
  }, (accessToken) => {
      console.log(accessToken);
  })
);





//listen to PORT, for Heroku will be process.env.PORT, for local env, 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);
