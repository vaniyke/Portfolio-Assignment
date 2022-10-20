/*
  File name: controllers/update.controller.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

var Contact = require('../models/contactModel')

module.exports = function(req, res, next) {
    var contacts = Contact.findById(req.params.id, (err, contact) => {
        if (err) {
            console.log(err)
        } else {
            res.render('index', { title: 'Update', contact: contact, id: req.params.id })
        }
    })
    
  }