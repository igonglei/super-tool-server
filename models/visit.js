const mongoose = require('mongoose')

const schema = new mongoose.Schema({
  date: String,
  usercount: Number,
  project: String,
  module: String
})

module.exports = mongoose.model('visit', schema)