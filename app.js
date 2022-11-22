// const http = require('http');
// const routes = require('./routes');
const express = require('express');  //here express returns a 'e' named fuction
const app = express();

app.use((req, res, next) => {
    console.log('In the middleware!');
    next();
})

app.use((req, res, next) => {
    console.log('In another middleware!');
    //....
    res.send('{ key1: value }')
})
// const server = http.createServer(app);
// server.listen(4000);
app.listen(3000);