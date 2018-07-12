const Router = require('koa-router')
const logController = require('../controllers/log')

const router = new Router()

router.get('/logs', async ctx => {
  try {
    ctx.body = await logController.getLogs(ctx.query)
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

router.get('/logsfromfile', async ctx => {
  try {
    ctx.body = await logController.getLogsFromFile()
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

router.post('/logs', async ctx => {
  try {
    ctx.body = await logController.addLogs(ctx.request.body)
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

router.put('/logs', async ctx => {
  try {
    ctx.body = await logController.updateLogs(ctx.request.body)
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

router.del('/logs/:id', async ctx => {
  try {
    ctx.body = await logController.deleteLogs(ctx.params.id)
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

module.exports = router