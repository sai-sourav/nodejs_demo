// const http = require('http');
// const routes = require('./routes');
const adminroutes = require('./routes/admin')
const shoproutes = require('./routes/shop')
const bodyparser = require('body-parser');
const express = require('express');  //here express returns a 'e' named fuction
const app = express();

app.use(bodyparser.urlencoded({extended: false}));

app.use('/admin',adminroutes);

app.use('/shop',shoproutes);

app.use((req, res, next) => {
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(3000);