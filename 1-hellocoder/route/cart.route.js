const express = require('express');

var db = require('../db');
var controller = require('../controllers/cart.controller');
const router = express.Router();

router.get('/add/:productId', controller.addToCart);

module.exports = router;