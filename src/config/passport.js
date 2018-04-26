const passport = require('passport');

module.exports = function (app) {
	app.use(passport.initialize());
	app.use(passport.session());

	passport.serializeUser(function(user, done){
		done(null, user.id);

	});

	passport.deserializeUser(function(user, done){
		/*
		mongodb.connect(config.dbUrl, function (err, client) {
          const db = client.db('libraryApp');
          db.collection('users').findOne({
            usename: username,
            password: password
          }, function (err, user) {
          	*/      
          	
           done(err, user);
          /*
     });
     */

        });	

        

	//});

	require('./strategies/local.strategy')();
};
