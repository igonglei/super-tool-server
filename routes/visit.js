const Router = require('koa-router')
const visitController = require('../controllers/visit')

const router = new Router()

router.post('/visits', async ctx => {
  try {
    ctx.body = await visitController.getVisits(ctx.request.body)
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

router.get('/visitsfromfile', async ctx => {
  try {
    ctx.body = await visitController.getVisitsFromFile()
  } catch (err) {
    ctx.throw(400, err.message)
  }
})

module.exports = router