var mongoonse = require('mongoonse');

var userSchema = new mongoonse.Schema({
	email: String,
	password: String,
	name: String,
	avatar: String,
	phone: String
});

var User = mongoonse.model('User', userSchema, 'users');

module.exports = User;