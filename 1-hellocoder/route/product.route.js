const express = require('express');

var db = require('../db');
var controller = require('../controllers/product.controller');
const router = express.Router();

router.get('/', controller.index);

module.exports = router;