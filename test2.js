// var a = require('./routes/users')

// // a.tree.prefix = '/users/'

// // console.log( a.tree)
// // console.log(typeof a.tree.children)

// // console.dir(a.tree.children)

// // console.dir(a.tree.children[0])


// // console.dir(a.tree.children[0].children)


// const dump = require('dumpster').dump;




// var routeruser = require('moa-router')()

// routeruser.tree.prefix = '/users/'

// routeruser.tree.children = a.tree.children


// // console.log(dump(a ,{pretty: true, depth:10}));

// console.log(dump(routeruser ,{pretty: true, depth:10}));


// // for (var key in a.tree) {
  
// //   var item = a.tree[key]

// //   console.log(item)
// // }


// // for (var key in a.tree.children) {
  
// //   var item = a.tree[key]

// //   console.log(item)
// // }

// // function decorator(obj, prefix){
// //   console.dir('-------------------------------------------------')
// //   console.dir(obj)

// //   for (var key in obj) {
    
// //     var item = obj[key]

// //     decorator(item, prefix + '/' + item.prefix)
// //   }
// //   // obj.children.forEach(function (item) {
// //   //   decorator(item.children, prefix + '/' + item.prefix)
// //   // })
// // }

// // console.log(a.tree.children)


// // decorator(a.tree, '/users')

<<<<<<< HEAD
console.log(a)
=======

var users = require('./routes/index')
users.forceRegister = true
users.prefix = "/user"

console.log(typeof users.meta)
console.log(users.meta)
require('log-n')(users)
>>>>>>> 423a8b3eea68ba0a0f20685aeaf40e25edbc8fd4
