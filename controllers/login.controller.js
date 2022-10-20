/*
  File name: controllers/login.controller.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

var User = require('../models/userModel')

module.exports = (req, res, next) => {
    User.findOne({
      username: req.body.username,
      password: req.body.password
    }).then(
      (user) => {
        if (!user) {
          res.render('index', { title: 'Login', error: 'Login details incorrect'})
        } else {
            var session=req.session;
            session.userid=req.body.username;
           res.redirect('/contact-list')
        }
      }
    )
  }