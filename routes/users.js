const router = require('moa-router')()

router.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router.get('/users', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

module.exports = router
