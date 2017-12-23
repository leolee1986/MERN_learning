const express = require("express");
require('./services/passport');
const authRoutes = require('./routes/authRoutes');

const app = express();

authRoutes(app);

//listen to PORT, for Heroku will be process.env.PORT, for local env, 5000
const PORT = process.env.PORT || 5000;
app.listen(PORT);