const express = require('express');
const router = express.Router();
const productcontroller = require('../controllers/productcontrollers');
// /admin/add-product
router.get('/add-product',productcontroller.getaddproduct)
// /admin/product
router.post('/product',productcontroller.postaddproduct)

module.exports = router;