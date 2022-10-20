/*
  File name: config/db.js
  Student name: Chijoke Ebenezer Iyke
  Student ID: 301256462
  Date: 19th of October 2022
*/

const mongoose = require('mongoose')
const MONGOURI = 'mongodb+srv://IvanIyke:test1234@cluster0.3uguwef.mongodb.net/?retryWrites=true&w=majority'

// connect to mongodb
const InitiateMongoServer = async () => {
    try {
        await mongoose.connect(MONGOURI, {
            useNewUrlParser: true
        });
        console.log('Connected to DB!!')
    } catch (e) {
        console.log(e)
        throw e
    }
}

module.exports = InitiateMongoServer;