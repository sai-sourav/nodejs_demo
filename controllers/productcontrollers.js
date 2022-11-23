const path = require('path');
const rootdir = require('../util/path');

exports.contactus = (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','contactus.html'))
};

exports.success = (req, res, next) => {
    res.send('<p>form successfully filled</p>');
};

exports.getaddproduct = (req, res, next) => {
    // res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">Add product</button>')
    res.sendFile(path.join(rootdir,'views','add-product.html'))
};

exports.postaddproduct = (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/add-product');
};

exports.errorpage = (req, res, next) => {
    res.status(404).sendFile(path.join(rootdir,'views','404.html'));
};

exports.getshop = (req, res, next) => {
    res.sendFile(path.join(rootdir,'views','shop.html'))
};