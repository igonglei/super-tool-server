const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  type: String,
  time: String,
  level: Number,
  ip: String,
  message: String
})

module.exports = mongoose.model('log', schema)