const express = require('express');
const router = express.Router();
const productcontroller = require('../controllers/productcontrollers');

router.get('/',productcontroller.getshop);

module.exports = router;