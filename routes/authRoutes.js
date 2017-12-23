const express = require("express");
const passport = require("passport");

module.exports = (app) => {
    // route to handle authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

};