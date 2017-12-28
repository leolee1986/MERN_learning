const express = require("express");
const passport = require("passport");

module.exports = (app) => {
    // route to handle authentication
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email']
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

    // route to logout, kill the cookie
    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user',  (req, res) => {
        res.send(req.user);
    });

};