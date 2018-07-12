'use strict'

const Koa = require('koa')
const onerror = require('koa-onerror')
const logger = require('koa-logger')
const cors = require('@koa/cors')
const serve = require('koa-static')
const hbs = require('koa-hbs')
const bodyParser = require('koa-bodyparser')
const compress = require('koa-compress')
const favicon = require('koa-favicon')
const config = require('./config/index')
const { port, mongoUri, prefix } = config
const indexRoutes = require('./routes/index')
const logRoutes = require('./routes/log').prefix(prefix)
const visitRoutes = require('./routes/visit').prefix(prefix)
const db = require('./db/index')

const app = new Koa()

onerror(app)

app.use(logger())

app.use(cors())

app.use(serve(__dirname + '/static'))

app.use(favicon(__dirname + '/static/favicon.ico'))

app.use(hbs.middleware({
  viewPath: __dirname + '/views',
  defaultLayout: 'layout'
}))

app.use(bodyParser())

app.use(indexRoutes.routes()).use(indexRoutes.allowedMethods())
  .use(logRoutes.routes()).use(logRoutes.allowedMethods())
  .use(visitRoutes.routes()).use(visitRoutes.allowedMethods())

app.use(compress())

db.connect(mongoUri)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})

module.exports = app