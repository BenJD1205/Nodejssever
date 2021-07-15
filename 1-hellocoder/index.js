require('dotenv').config();
console.log(process.env.SESSION_SECRET);

var express = require('express');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URL);

var userRoutes = require('./route/user.route');
var authRoute = require('./route/auth.route');
var productRoute = require('./route/product.route');
var cartRoute = require('./route/cart.route');
var transferRoute = require('./route/transfer.route');


var authMiddleware = require('./middlewares/auth.middleware');
var sessionMiddleware = require('./middlewares/session.middleware');
// Set some defaults (required if your JSON file is empty)


var port = 3000;

var app = express();
app.set('view engine', 'pug');
app.set('views','./views')

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionMiddleware);

app.use(express.static('public'));

app.get('/',function(req,res){
	res.render('index',{
		name: 'Ben'
	});
});	

app.use('/users', authMiddleware.requireAuth ,userRoutes);
app.use('/auth', authRoute);
app.use('/products', productRoute);
app.use('/cart', cartRoute);
app.use('/transfer', authMiddleware.requireAuth ,transferRoute);

app.listen(port,function(){
	console.log('Sever listening on port' + port);
});