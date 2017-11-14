// const Koa = require('koa');
// const app = new Koa();

// const mount = require('./');

// // simple
// // mount(app);
// // with path
// mount(app, __dirname + '/routes', true);

// // with path & api dump
// // mount(app,  __dirname + '/routes', true);

// app.on('error', function(err, ctx){
//   log.error('server error', err, ctx);
// });

// app.listen(3000);


var requireDirectory = require('require-directory');
var routes = requireDirectory(module, './routes');

console.log(routes)


var router = require('moa-router')()

router.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})


// console.dir(router)

// router.tree.children = 


var a = require('./routes/users')

// a.tree.prefix = '/users/'
// console.dir(a)

// console.dir(a.tree)

// console.dir(a.tree.children)



var routeruser = require('moa-router')()
routeruser.tree.prefix = '/users/'


routeruser.tree.children = a.tree.children

routeruser.tree.numberOfChildren = a.tree.children.length

routeruser.tree.label = a.tree.children.length


router.tree.children = routeruser.tree.children

router.tree.numberOfChildren = routeruser.tree.children.length

router.tree.label = routeruser.tree.children.length



// router.tree.prefix = '/users/'

// console.dir(router)

// console.dir(router.tree.children)





const http = require('http')
const Koa = require('koa')
const app = new Koa()
 
const router2 = require('moa-router')()
router2.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router2.on('GET', '/users/test', (ctx, next) => {
  ctx.body = {'hello': 'world'}
})


const dump = require('dumpster').dump;
 
console.log(dump(router2 ,{pretty: true, depth:10}));


app.use(router.routes())


console.log(dump(router ,{pretty: true, depth:10}));


app.use(async function (ctx, next) {
  ctx.body = "default"
})

const server = http.createServer(app.callback())

server.listen(3000, err => {
  if (err) throw err
  console.log('Server listening on: http://localhost:3000')
})
