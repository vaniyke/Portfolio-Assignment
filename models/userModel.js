/*
  File name: models/userModel.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

const mongoose = require("mongoose");
 
// create a schema
var userSchema = new mongoose.Schema({
            username: String,
            password: String
        });
 
module.exports = mongoose.model('users', userSchema);
