const fs = require('fs')
const path = require('path')

const resolvePath = dir => path.join(__dirname, '..', dir)

const readFile = (path, encoding) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, encoding, (err, data) => {
      if (err) return reject(err)
      resolve(data)
    })
  })
}

module.exports = {
  resolvePath,
  readFile
}