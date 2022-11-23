// const http = require('http');
// const routes = require('./routes');
const adminroutes = require('./routes/admin');
const shoproutes = require('./routes/shop');
const contactusroutes = require('./routes/contactus');
const bodyparser = require('body-parser');
const express = require('express');  //here express returns a 'e' named fuction
const app = express();
const path = require('path');

const productcontroller = require('./controllers/productcontrollers');

app.use(bodyparser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin',adminroutes);

app.use('/shop',shoproutes);

app.use(contactusroutes);

app.use(productcontroller.errorpage);

app.listen(4000);