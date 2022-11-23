const express = require('express');
const router = express.Router();
const path = require('path');
const rootdir = require('../util/path')

router.use('/contactus',(req, res, next) => {
    res.sendFile(path.join(rootdir,'views','contactus.html'))
})

router.use('/success',(req, res, next) => {
    res.send('<p>form successfully filled</p>');
})

module.exports = router;