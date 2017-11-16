const http = require('http')
const Koa = require('koa')
const app = new Koa()

var dirw = require('dirw');

dirw.walk('./routes', 0, handleFile);

function handleFile(path, floor) {
  if (/js$/.test(path)) {
    console.log(path)

    var prefix = path.replace('./routes', '').replace('.js', '')
    console.log(prefix)

    var router = require(path)
    router.tree.prefix = prefix


    require('log-n')(router)

    // require('log-n')(routeruser);


    app.use(router.routes())

  }
  // 
}

app.listen(3000)
