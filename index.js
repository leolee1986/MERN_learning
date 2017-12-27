const express = require('express');
const mongoose = require('mongoose');
require('./services/passport');
const authRoutes = require('./routes/authRoutes');
const keys = require('./config/keys');


const app = express();

// use mongoose to connect to mongoDB
mongoose.connect(keys.mongoURI);

authRoutes(app);

//listen to PORT, for Heroku will be process.env.PORT, for local env, 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);