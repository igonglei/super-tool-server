const Router = require('koa-router')
const logController = require('../controllers/log')

const router = new Router()

router.get('/logs', async ctx => {
  let body = {}
  try {
    body = {
      code: 200,
      data: await logController.getLogs()
    }
  } catch (err) {
    body = {
      code: 404,
      msg: err.message
    }
  }
  ctx.body = body
})

module.exports = router