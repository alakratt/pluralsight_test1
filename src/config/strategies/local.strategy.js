const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

module.exports = function () {
	passport.use(new LocalStrategy({
		usernameField: 'userName',
		passwordField: 'password'
	},
function(username, password, done){
	let user  = {
		username: username,
		password: password
	};
	
	done(null, user);
}
	));
};
