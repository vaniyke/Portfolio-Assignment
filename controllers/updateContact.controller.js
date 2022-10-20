/*
  File name: controllers/updateContact.controller.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

var Contact = require('../models/contactModel')


  const updateContact = async(req, res, next) => {
    try {
        const updateContact = await Contact.findByIdAndUpdate(
            { _id: req.body.id},
            { 
                name: req.body.name,
                number: req.body.number,
                email: req.body.email 
            }
        )
        res.redirect('/contact-list')
    } catch (error) {
        throw error
    }
}

module.exports = updateContact