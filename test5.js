var routeruser = require('moa-router')()


routeruser.tree.prefix = '/users/'


const router = require('./routes/api/users')

require('log-n')(router)

wrap(routeruser, '/api/', router)

function wrap(parent, prefix, router) {
  var empty = require('moa-router')()
  empty.tree.prefix = prefix

  router.tree.prefix = prefix

  var arr = parent.tree.children

  arr = arr.concat(router.tree)
  console.log(router)

  empty.tree.children = arr //.concat(router.tree.children)
  empty.tree.numberOfChildren = arr.length

  require('log-n')(empty);

  var all = empty.tree.children
  console.log(all)


  console.log(parent.tree.children)


  parent.tree.children = all.concat(parent.tree.children)
  parent.tree.numberOfChildren = all.length


  require('log-n')(parent);

}

const http = require('http')
const Koa = require('koa')
const app = new Koa()


// require('log-n')(routeruser);


app.use(routeruser.routes())

app.listen(3000)