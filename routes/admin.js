const express = require('express');
const router = express.Router();
// /admin/add-product
router.get('/add-product',(req, res, next) => {
    res.send('<form action="/admin/product" method="POST"><input type="text" name="title"><br><input type="text" name="size"><br><button type="submit">Add product</button>')
    
})
// /admin/product
router.post('/product',(req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect('/add-product');
})

module.exports = router;