var mongoonse = require('mongoonse');

var productSchema = new mongoonse.Schema({
	email: String,
	password: String,
	name: String,
	avatar: String,
	phone: String
});

var User = mongoonse.model('User', productSchema, 'products');

module.exports = Product;