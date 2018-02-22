const KoaRouter = require('koa-router');
const routes = require('./routes');

const router = new KoaRouter({ prefix: '/api' });

routes(router);

module.exports = router;
