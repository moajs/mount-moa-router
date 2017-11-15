const router2 = require('moa-router')()
router2.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router2.on('GET', '/users/test', (ctx, next) => {
  ctx.body = {'hello': 'world'}
})

require('log-n')(router2)

const http = require('http')
const Koa = require('koa')
const app = new Koa()

app.use(router2.routes())

app.listen(3000)