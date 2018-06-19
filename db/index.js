const mongoose = require('mongoose')

const connect = uri => {
  mongoose.connect(uri).then(
    () => {
      console.log(`Database connected at ${uri}`)
    },
    err => {
      console.log(`Database connect error: ${err.message}`)
    }
  )
}

module.exports = {
  connect
}