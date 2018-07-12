const config = {
  development: {
    port: 3000,
    mongoUri: 'mongodb://localhost:30000/supertool-dev',
    prefix: '/api/v1'
  },
  production: {
    port: 3000,
    mongoUri: 'mongodb://localhost:30000/supertool',
    prefix: '/api/v1'
  }
}

module.exports = config[process.env.NODE_ENV] || config.development