'use strict'

const Koa = require('koa')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const serve = require('koa-static')
const views = require('koa-views')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const favicon = require('koa-favicon')
const indexRoutes = require('./routes/index')
const logRoutes = require('./routes/log')
const visitRoutes = require('./routes/visit')
const config = require('./config/index')
const PORT = config.port
const db = require('./db/index')

const app = new Koa()

app.use(logger())

app.use(cors())

app.use(serve(__dirname + '/static'))

app.use(favicon(__dirname + '/static/favicon.ico'))

app.use(views(__dirname + '/views', {
  extension: 'hbs',
  map: { hbs: 'handlebars' }
}))

app.use(bodyParser())

app.use(indexRoutes.routes()).use(indexRoutes.allowedMethods())
  .use(logRoutes.routes()).use(logRoutes.allowedMethods())
  .use(visitRoutes.routes()).use(visitRoutes.allowedMethods())

app.use(compress())

db.connect(config.mongoUri)

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

module.exports = app