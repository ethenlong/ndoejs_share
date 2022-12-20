const express = require('express')
const app = express()

const middleware1 = (req, res, next) => {
    console.log('start middleware1')
    next();
    console.log('end middleware1')
}

const middleware2 = (req, res, next) => {
    console.log('start middleware2')
    new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve();
            req.prop = 'req prop';
        }, 500)
    })
    next();
    console.log('end middleware2')
}

const middleware3 = (req, res, next) => {
    console.log('start middleware3') 
    console.log('req prop ' + req.prop)
    next();
    console.log('end middleware3')
}

app.use(middleware1);
app.use(middleware2);
app.use(middleware3);
app.listen(3000, () => {
    console.log('Example app listening on port 3000')
})