const Router = require('koa-router')
const logController = require('../controllers/log')

const router = new Router()

router.get('/logs', async ctx => {
  try {
    ctx.body = await logController.getLogs()
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

module.exports = router