const mongoose = require('mongoose')
// to check what happen  when things are send to database
mongoose.set('debug', true)
mongoose.connect('mongodb://localhost/skydive_api_db')

mongoose.Promise = Promise
module.exports.Skydive = require('./skydive')
