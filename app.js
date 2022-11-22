// const http = require('http');
// const routes = require('./routes');
const bodyparser = require('body-parser');
const express = require('express');  //here express returns a 'e' named fuction
const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use('/add-product',(req, res, next) => {
    res.send('<form action="/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">Add product</button>')
    
})

// app.use('/product',(req, res, next) => {
//     console.log(req.body.title);
//     res.redirect('/add-product');
// })

app.post('/product',(req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/add-product');
})

app.use('/',(req, res, next) => {
    res.send('<h1>hello from express.js</h1>')
})
// const server = http.createServer(app);
// server.listen(4000);
app.listen(3000);