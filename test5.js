<<<<<<< HEAD
=======
// var routeruser = require('moa-router')()
>>>>>>> 423a8b3eea68ba0a0f20685aeaf40e25edbc8fd4

const http = require('http')
const Koa = require('koa')
const app = new Koa()

<<<<<<< HEAD
const router = require('./routes/api/')
router.tree.prefix = '/api/'

=======
// routeruser.tree.prefix = '/users/'


// const router = require('./routes/api/users')
>>>>>>> 423a8b3eea68ba0a0f20685aeaf40e25edbc8fd4

// require('log-n')(router)

<<<<<<< HEAD
// require('log-n')(routeruser);

=======
// wrap(routeruser, '/api/', router)

// function wrap(parent, prefix, router) {
//   var empty = require('moa-router')()
//   empty.tree.prefix = prefix

//   router.tree.prefix = prefix

//   var arr = parent.tree.children

//   arr = arr.concat(router.tree)
//   console.log(router)

//   empty.tree.children = arr //.concat(router.tree.children)
//   empty.tree.numberOfChildren = arr.length

//   require('log-n')(empty);

//   var all = empty.tree.children
//   console.log(all)


//   console.log(parent.tree.children)


//   parent.tree.children = all.concat(parent.tree.children)
//   parent.tree.numberOfChildren = all.length


//   require('log-n')(parent);

// }

// const http = require('http')
// const Koa = require('koa')
// const app = new Koa()


// // require('log-n')(routeruser);


// app.use(routeruser.routes())

// app.listen(3000)
>>>>>>> 423a8b3eea68ba0a0f20685aeaf40e25edbc8fd4


const router2 = require('./routes/')
router2.tree.prefix = '/'

<<<<<<< HEAD
app.use(router2.routes())
require('log-n')(router2)
=======
>>>>>>> 423a8b3eea68ba0a0f20685aeaf40e25edbc8fd4

app.use(router.routes())

<<<<<<< HEAD
=======
var a = {
  on: function (aa) {
    console.log(aa)
  },

  f: function () {
    console.log(f)
    original.apply(this, arguments);
    return this.on.apply(this, arguments);
  }
}


var origin = a.on


>>>>>>> 423a8b3eea68ba0a0f20685aeaf40e25edbc8fd4

a.on('23332')