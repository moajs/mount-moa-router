
// console.dir(a.tree.children)

// console.dir(a.tree.children[0])


// console.dir(a.tree.children[0].children)


const dump = require('dumpster').dump;




var routeruser = require('moa-router')()

routeruser.get('/', (ctx, next) => {
    ctx.body = {'path': 'root'}
})

routeruser.get('/list', (ctx, next) => {
    ctx.body = {'path': '/list'}
  })
  
console.log(dump(routeruser ,{pretty: true, depth:10}));


routeruser.tree.prefix = '/users/'



const router = require('moa-router')()

router.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router.get('/users/list', (ctx, next) => {
  ctx.body = {'path': 'users/users/list'}
})

var arr = routeruser.tree.children

arr = arr.concat(router.tree.children)
// console.log(router.tree.children)
// console.log(routeruser.tree.children)
console.log(arr)
routeruser.tree.children=arr//.concat(router.tree.children)
routeruser.tree.numberOfChildren = arr.length
// routeruser.tree.children = router.tree.children

console.log(routeruser.tree.children)
// console.log(dump(a ,{pretty: true, depth:10}));

console.log(dump(routeruser ,{pretty: true, depth:10}));


const http = require('http')
const Koa = require('koa')
const app = new Koa()

 


  
app.use(routeruser.routes())

app.listen(3000)
