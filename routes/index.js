const Router = require('koa-router')

const router = new Router()

router.get('/', async ctx => {
  let api = [{
    path: '/logs',
    type: 'POST',
    params: JSON.stringify({ query: {}, projection: '', options: {} }),
    desc: 'get server logs'
  }, {
    path: '/visits',
    type: 'POST',
    params: JSON.stringify({ query: {} }),
    desc: 'get user visits'
  }]
  await ctx.render('index', {
    title: 'API',
    api
  })
})

module.exports = router