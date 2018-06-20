const Router = require('koa-router')
const logController = require('../controllers/log')

const router = new Router()

router.post('/logs', async ctx => {
  try {
    ctx.body = await logController.getLogs(ctx.request.body)
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

module.exports = router