const Router = require('koa-router')
const visitController = require('../controllers/visit')

const router = new Router()

router.get('/visits', async ctx => {
  try {
    ctx.body = await visitController.getVisits()
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

module.exports = router