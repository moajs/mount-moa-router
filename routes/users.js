const router = require('moa-router')()

router.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router.get('/users/list', (ctx, next) => {
  ctx.body = {'path': 'users'}
})


module.exports = router
