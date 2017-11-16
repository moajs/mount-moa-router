
const http = require('http')
const Koa = require('koa')
const app = new Koa()

const router = require('./routes/api/')
router.tree.prefix = '/api/'


require('log-n')(router)

// require('log-n')(routeruser);



const router2 = require('./routes/')
router2.tree.prefix = '/'

app.use(router2.routes())
require('log-n')(router2)

app.use(router.routes())


app.listen(3000)