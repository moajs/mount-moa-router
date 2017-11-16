// var dirw = require('dirw');

// dirw.walk('./routes', 0, handleFile);

const router = require('moa-router')()


router.forceRegister = true


var walk = require('walk'),
  fs = require('fs'),
  walker;


// module.exports =
 function a(){
  walker = walk.walk("./routes", {});
  
  walker.on("file", function (root, fileStats, next) {  
    var path = root + '/' + fileStats.name;
  
    if (/js$/.test(path)) {
      console.log(path)
  
      var prefix = path.replace('./routes', '').replace('.js', '')
  
      console.log(prefix)
  
      var _router = require(path)
      // users.forceRegister = true
      _router.prefix = prefix

      router.meta = _router.meta
      next();
    }
  });
  
  walker.on("errors", function (root, nodeStatsArray, next) {
    next();
  });

  return new Promise(function (resolve, reject) {
    walker.on("end", function () {
      console.log("all done");
      require('log-n')(router.meta)
      resolve(router.routes())
    });
  })
}





const http = require('http')
const Koa = require('koa')
const app = new Koa()

a().then(function(r){
  app.use(router.routes())
})


app.listen(3000)

