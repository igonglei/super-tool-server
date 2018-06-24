const Router = require('koa-router')

const router = new Router()

router.get('/', async ctx => {
  await ctx.render('index', {
    title: 'Home',
    body: 'Home Page'
  })
})

module.exports = router