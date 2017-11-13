const router = require('moa-router')()

router.get('/', (ctx, next) => {
  ctx.body = {'path': 'root'}
})

router.get('/users', (ctx, next) => {
  ctx.body = {'path': 'users'}
})


router.get('/users/alfred', (ctx, next) => {
  ctx.body = {'path': 'users'}
})

module.exports = router
