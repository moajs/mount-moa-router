const dump = require('dumpster').dump;

var routeruser = require('moa-router')()

routeruser.get('/', (ctx, next) => {
    ctx.body = {'path': 'root'}
})

routeruser.get('/list', (ctx, next) => {
    ctx.body = {'path': '/list'}
  })
  
// console.log(dump(routeruser ,{pretty: true, depth:10}));

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
// console.log(arr)
routeruser.tree.children=arr//.concat(router.tree.children)
routeruser.tree.numberOfChildren = arr.length
// routeruser.tree.children = router.tree.children

// console.log(routeruser.tree.children)
// // console.log(dump(a ,{pretty: true, depth:10}));

// console.log(dump(routeruser ,{pretty: true, depth:10}));


const http = require('http')
const Koa = require('koa')
const app = new Koa()

 


  
// app.use(routeruser.routes())

// app.listen(3000)


var requireDirectory = require('require-directory');
var routes = requireDirectory(module, './routes');

console.log(routes.keys)

var all = dddd (routes)

// console.dir(all)



var ssss = []
function dddd (routes, prefix){
  if (!prefix) prefix = '/'
  var re = []
  for (var k in routes) {
    var path = '';
    console.log(prefix + '/' + k)
  
    // if(typeof routes[k].stack == 'object') {
  
    // }
  
    if(routes[k].type !== 'koa'){
      var subRe = dddd (routes[k], k)
      // console.log(subRe)
      re = re.concat(subRe)
      // console.log(re)
    } else {
      // var obj = aaaa(routes[k], prefix)
      re.push( {
        obj: routes[k],
        key: prefix + '/' + k
      })
    }
  }

  return re
}

function aaaa(r, prefix){
  console.log(r)
  
  return {
      key: prefix,
      obj: r
    }
}

// console.log(routes_arr)

console.log(dump(all ,{pretty: true, depth:10}));