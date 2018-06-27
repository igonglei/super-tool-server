const Router = require('koa-router')

const router = new Router()

router.get('/', async ctx => {
  await ctx.render('swagger', {
    title: 'API'
  })
})

router.get('/api', async ctx => {
  let api = [{
    path: '/logs',
    type: 'POST',
    params: JSON.stringify({ query: {}, projection: '', options: {} }),
    desc: 'get server logs from mongodb'
  }, {
    path: '/logsfromfile',
    type: 'GET',
    params: '',
    desc: 'get server logs from json file'
  }, {
    path: '/visits',
    type: 'POST',
    params: JSON.stringify({ query: {} }),
    desc: 'get user visits from mongodb'
  }, {
    path: '/visitsfromfile',
    type: 'GET',
    params: '',
    desc: 'get user visits from json file'
  }]
  await ctx.render('index', {
    title: 'API',
    api
  })
})

module.exports = router