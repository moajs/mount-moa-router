
const router2 = require('moa-router')()
router2.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router2.on('GET', '/users/test', (ctx, next) => {
  ctx.body = {'hello': 'world'}
})

router2.forceRegister = true

router2.prefix = '/api'



var users = require('./routes/index')
// users.forceRegister = true
// users.prefix = "/user"

// console.log(typeof users.meta)
// console.log(users.meta)


router2.meta = users.meta


// require('log-n')(router2.meta)

const http = require('http')
const Koa = require('koa')
const app = new Koa()

app.use(router2.routes())

app.listen(3000)

