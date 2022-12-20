const Koa = require('koa');
const app = new Koa();
const compose = require('koa-compose');

const middleware1 = async(ctx, next) => {
    ctx.body = 'start middleware1\n';
    await next();
    ctx.body = ctx.body + 'end middleware1\n';
}

const middleware2 = async(ctx, next) => {
    ctx.body = ctx.body + 'start middleware2\n';
    await new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
            ctx.state.prop = 'async prop';
        }, 500)
    })
    next();
    ctx.body = ctx.body + 'end middleware2\n';
}

const middleware3 = (ctx, next) => {
    ctx.body = ctx.body + 'start middleware3\n';
    ctx.body = ctx.body + ctx.state.prop + '\n';
    next();
    ctx.body = ctx.body + 'end middleware3\n';
}

const middlewares = compose([
    middleware1,
    middleware2,
    middleware3
]);
app.use(middlewares);
app.listen(3000);
