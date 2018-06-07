const router = require('koa-router')()

/**
 * @api {get} /users Get user list
 * @apiVersion  0.0.1
 * @apiGroup User
 * @apiName GetUserList
 * @apiSampleRequest /users
 */
router.get('/users', async (ctx) => {
  ctx.body = []
})

module.exports = router
