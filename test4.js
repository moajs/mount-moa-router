
// console.dir(a.tree.children)

// console.dir(a.tree.children[0])


// console.dir(a.tree.children[0].children)


const dump = require('dumpster').dump;




var routeruser = require('moa-router')()

routeruser.get('/', (ctx, next) => {
    ctx.body = {'path': 'root'}
})

routeruser.get('/list', (ctx, next) => {
    ctx.body = {'path': 'users'}
  })
  

routeruser.get('/us', (ctx, next) => {
  ctx.body = {'path': 'users'}
})

console.log(dump(routeruser ,{pretty: true, depth:10}));
