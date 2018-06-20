const config = {
  development: {
    port: 3000,
    mongoUri: 'mongodb://localhost:30000/supertool-dev'
  },
  production: {
    port: 3000,
    mongoUri: 'mongodb://localhost:30000/supertool'
  }
}

module.exports = config[process.env.NODE_ENV] || config.development