// const http = require('http');
// const routes = require('./routes');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const contactusroutes = require('./routes/contactus');
const bodyparser = require('body-parser');
const express = require('express');  //here express returns a 'e' named fuction
const app = express();
const path = require('path');
const rootdir = require('./util/path');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminroutes);

app.use('/shop',shoproutes);

app.use(contactusroutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
})

app.listen(4000);