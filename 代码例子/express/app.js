const express = require('express')
const exphbs = require('express-handlebars');
const app = express()
const port = 3000

// app.set('view engine', '.ejs');

app.engine('.hbs', exphbs.engine({
    layoutsDir: 'views',
    defaultLayout: 'user',
    extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.get('/', (req, res) => {
    res.send('home page')
})

app.get('/about', (req, res) => {
    res.send('about page')
})

const user = {
    name: 'Jack',
    count: 3,
}

app.get('/user', (req, res) => {
    res.render('user', {user});
})

app.use(express.static(__dirname + '/public'));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})