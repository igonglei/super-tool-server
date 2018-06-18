const Router = require('koa-router')
const visitController = require('../controllers/visit')

const router = new Router()

router.get('/visits', async ctx => {
  let body = {}
  try {
    body = {
      code: 200,
      data: await visitController.getVisits()
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