const mongoose = require('mongoose')
// schema
const skydiveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: 'Name can not be blank'
  },
  booked: {
    type: Boolean,
    default: false
  },
  created_date: {
    type: Date,
    default: Date.now
  }
})

// compile to a model and save to a variable
const Skydive = mongoose.model('Skydive', skydiveSchema)
module.exports = Skydive
