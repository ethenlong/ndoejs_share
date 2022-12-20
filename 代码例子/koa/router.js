const koa = require('koa');
const Router = require('koa-router');

const app = new koa();
const router = new Router();

router.get('/', (ctx, next) => {
    ctx.body = "index page"
  });

router.get('/greetings', (ctx, next) => {
  ctx.body = "greeting page"
});

app.use(router.routes())

app.listen(3000, function(){
   console.log('Server running on https://localhost:3000')
});