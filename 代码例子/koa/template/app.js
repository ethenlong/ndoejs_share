const path = require('path');
const views = require('koa-views');
const Koa = require('koa');
const app = module.exports = new Koa();
const hbs = require('koa-hbs');

app.use(views(path.join(__dirname, '/views'), { extension: 'ejs' }));
// app.use(hbs.middleware({
//   viewPath: __dirname + '/views',
//   defaultLayout: 'user',
//   disableCache: true,
// }));

const user = {
  name: 'Jack',
  count: 3,
};

// render
app.use(async function(ctx) {
  await ctx.render('user', { user });
});

app.listen(3000);