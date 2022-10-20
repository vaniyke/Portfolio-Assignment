/*
  File name: controller/delete.controller.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

var Contact = require('../models/contactModel')

module.exports = function(req, res, next) {
    Contact.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) {
            res.redirect('/contact-list');
        } else {
            console.log('Failed to Delete Contact: ' + err);
        }
    });
  }