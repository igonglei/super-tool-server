const mongoose = require('mongoose')

const connect = async uri => {
  await mongoose.connect(uri).then(
    () => {
      console.log(this)
      console.log('Database connected')
    },
    err => {
      console.log(`Database connect error: ${err.message}`)
    }
  )
}

module.exports = {
  connect
}