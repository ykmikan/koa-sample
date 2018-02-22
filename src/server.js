const co = require('co');
const Koa = require('koa');
// const cors = require('kcors');
// const bodyParser = require('koa-better-body');
// const converter = require('koa-convert');
// const swaggerInjector = require('swagger-injector');
// const swaggerSpec = require('@modules/swagger-spec');
const router = require('./routes/router');
const app = new Koa();

app.use(router.routes())
  .use((ctx, next) => co(function* (){
    yield next();
  })
  .catch((err) => {
    ctx.body = { message: err.message };
    ctx.status = err.status || 500;
  })
)

module.exports = app;
