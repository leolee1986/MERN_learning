const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
// which is the same as the line below
const { Schema } = mongoose;

// setup the Schema
const userSchema = new Schema({
    googleId: String
});

//mongoose use this to create a users collection and use userSchema
mongoose.model('users', userSchema);