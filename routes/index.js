const Router = require('koa-router')

const router = new Router()

router.get('/', async ctx => {
  let api = [{
    path: '/logs',
    type: 'POST',
    params: JSON.stringify({ query: {}, projection: '', options: {} })
  }, {
    path: '/visits',
    type: 'POST',
    params: JSON.stringify({ query: {} })
  }]
  ctx.state = { title: 'Api', api }
  await ctx.render('index')
})

module.exports = router