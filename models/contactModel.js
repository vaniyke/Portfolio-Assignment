/*
  File name: models/contactModel.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

const mongoose = require("mongoose");
 
// create a schema
var contactSchema = new mongoose.Schema({
            name: String,
            number: String,
            email: String
        });
 
module.exports = mongoose.model('contacts', contactSchema);
